import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {getActivityByProfileId} from "../../utils/activity/getActivityByProfileId";

export async function activityController(request: Request, response: Response) : Promise<Response> {
    return response.json('Activity route works!')
}

export async function getActivityByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await getActivityByProfileId(profileId);
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