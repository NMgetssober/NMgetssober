import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityTypeByActivityTypeId} from "../../utils/activty-type/selectActivityTypeByActivityTypeId";

export async function getActivityTypebyActivityTypeIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {activityTypeId} = request.params;
        const mySqlResult = await selectActivityTypeByActivityTypeId(activityTypeId);
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
