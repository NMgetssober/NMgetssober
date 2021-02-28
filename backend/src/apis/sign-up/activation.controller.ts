import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {selectProfileByProfileAuthenticationKey} from "../../utils/profile/selectProfileByProfileAuthenticationKey";
import {updateProfile} from "../../utils/profile/updateProfile";

export async function activationController(request: Request, response: Response) {
    const {activation} = request.params
    try {
        const profile = await selectProfileByProfileAuthenticationKey(activation)

        const activationFailed = () => response.json({
            status: 400,
            data: null,
            message: "Account activation has failed. Have you already activated this account"
        });

        const activationSucceeded = async (profile: Profile) => {
           const updatedProfile = {...profile, profileAuthenticationKey: null}
           await updateProfile(updatedProfile)
            return response.json({
                status: 200,
                data: null,
                message: "Account activation was successful"
            });
        }

        profile ? await activationSucceeded(profile) : activationFailed()

    } catch (error) {
        return response.json({
            status: 500,
            data: null,
            message: error.message})
    }
}