import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityByZipCode} from "../../utils/activity/selectActivityByZipCode";

export async function activityTypeController(request: Request, response: Response) : Promise<Response> {
    try {
        const {zipCode} = request.params;
        const mySqlResult = await selectAllActivityType();
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
