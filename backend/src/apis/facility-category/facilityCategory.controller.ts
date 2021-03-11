import {Request, Response} from "express";
import {Status} from '../../utils/interfaces/Status';
import {selectFacilityCategoryByFacilityCategoryName} from "../../utils/facilityCategory/selectFacilityCategoryByFacilityCategoryName";

export async function facilityCategoryController(request: Request, response: Response) : Promise<Response> {
    try {
        const {facilityCategoryName} = request.params;
        const mySqlResult = await selectFacilityCategoryByFacilityCategoryName(facilityCategoryName);
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