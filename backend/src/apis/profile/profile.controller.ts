import {Request, Response} from "express";
import {Profile, PartialProfile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {updateProfile} from "../../utils/profile/updateProfile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";

export async function putProfileController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params
        const {profileUsername} = request.body
        // @ts-ignore mismatched type
        const profileIdFromSession: string = <string>request.session?.profile.profileId

        const performUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({
                status: 200,
                data: null,
                message: "Profile successfully updated"
            })
        }
        const updateFailed = (message: string) : Response => {
            return response.json({
                status: 400,
                data: null,
                message
            })
        }
        return profileId === profileIdFromSession
            ? performUpdate({profileId, profileUsername})
            : updateFailed("You are not allowed to perform this action")
    } catch (error) {
        return response.json({
            status: 400,
            data: null,
            message: error.message
        })
    }
}

export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return(response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }
}