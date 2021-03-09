import {NextFunction, Request, Response} from "express";
import "express-session";
import passport from "passport";
import passportLocal, {Strategy} from "passport-local";

import uuid from "uuid";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Profile} from "../../utils/interfaces/Profile";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";


export async function signinController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {profilePassword} = request.body;

        passport.authenticate(
            'local',
            {session: false},
            async (err: any, passportUser: Profile) => {
                console.log(passportUser)
                const {profileId, profileUsername, profileEmail} = passportUser;
                const signature: string = uuid();
                const authorization: string = generateJwt({profileId, profileUsername, profileEmail}, signature);

                const signInFailed = (message: string) => response.json({
                    status: 400,
                    data: null,
                    message
                });

                const signInSuccessful = () => {
                    if (passportUser.profileAuthenticationKey !== null) {
                        signInFailed("Please activate your account")
                    }
                    if (request.session) {
                        //@ts-ignore mismatch with express session typing
                        request.session.profile = passportUser;
                        //@ts-ignore mismatch with express session typing
                        request.session.jwt = authorization;
                        //@ts-ignore mismatch with express session typing
                        request.session.signature = signature;
                    }

                    response.header({
                        authorization
                    });

                    return response.json({
                        status: 200,
                        data: null,
                        message: "Sign in successful"
                    })
                };

                const isPasswordValid: boolean = passportUser && await validatePassword(passportUser.profilePassword, profilePassword);
                return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password");
            })(request, response, nextFunction)
    } catch (error) {
        return response.json({
            status: 500,
            data: null,
            message: error.message
        })
    }
}

const LocalStrategy = passportLocal.Strategy;

export const passportStrategy: Strategy = new LocalStrategy(
    {
        usernameField: 'profileEmail',
        passwordField: 'profilePassword'
    },
    async (email, password, done) => {
        try {
            const profile: Profile | undefined = await selectProfileByProfileEmail(email);

            return profile ? done(null, profile) : done(undefined, undefined, {message: 'Incorrect username or password'});
        } catch (error) {
            return done(error);
        }
    }
);