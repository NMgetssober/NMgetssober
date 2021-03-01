import {Request, Response} from 'express';
import {setAuthenticationKey, setHash} from "../../utils/auth.utils";
import {Profile} from "../../utils/interfaces/Profile";
import {insertProfile} from "../../utils/profile/insertProfile";
import MailComposer from "nodemailer/lib/mail-composer";
import {Status} from "../../utils/interfaces/Status";

const mailgun = require("mailgun-js")

export async function signupProfileController(request: Request, response: Response) : Promise<Response|undefined> {
    try {
        const {profileEmail, profilePassword, profileUsername} = request.body;
        const profileHash= await setHash(profilePassword);
        const profileAuthenticationKey = setAuthenticationKey();
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileAuthenticationKey}`

        const message = `<h2>Welcome to NM Gets Sober.</h2>
        <p>In order to bookmark your favorites you must confirm your account</p>
        <p><a href="${basePath}">${basePath}</a></p>
    `
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "One step closer to activating your account",
            text: 'Test email text',
            html: message
        }

        const profile: Profile = {
            profileId: null,
            profileAuthenticationKey,
            profileEmail,
            profilePassword: profileHash,
            profileUsername,
        };

        const result = await insertProfile(profile)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            const compiledEmail = {
                to: profileEmail,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Profile successfully created please check your email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    return response.json({
                        status:418,
                        data: null,
                        message:"error sending email"
                    })
                }
                return response.json(status);
            });
        })
    } catch (error) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };
        return response.json(status);
    }
}