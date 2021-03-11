import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityTypeByActivityTypeId} from "../../utils/activty-type/selectActivityTypeByActivityTypeId";
import {selectAllActivityType} from "../../utils/activty-type/selectAllActivityType";


export async function getAllActivityTypeController(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllActivityType();
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

export async function getActivityTypeByActivityTypeId(request: Request, response: Response) : Promise<Response> {
    try {
        const {activityTypeId} = request.params;
        const mySqlResult = await selectActivityTypeByActivityTypeId(activityTypeId);
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