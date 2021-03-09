import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityByProfileId} from "../../utils/activity/selectActivityByProfileId";
import {selectActivityByActivityId} from "../../utils/activity/selectActivityByActivityId";

export async function getActivityByProfileIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectActivityByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: 'good'}
        return response.json(status)
    } catch (error) {
        return(response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }
}

export async function getActivityByActivityId(request: Request, response: Response) : Promise<Response> {
    try {
        const {activityId} = request.params;
        const mySqlResult = await selectActivityByActivityId(activityId);
        const data = mySqlResult ?? null
        console.log(await mySqlResult)
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