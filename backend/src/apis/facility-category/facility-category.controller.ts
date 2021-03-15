import {Request, Response} from "express";
import {Status} from '../../utils/interfaces/Status';
import {selectAllFacilityCategories} from "../../utils/facility-category/selectAllFacilityCategories";

;

export async function getAllFacilityCategories(request: Request, response: Response) : Promise<Response>{
    try {

        const mySqlResult = await selectAllFacilityCategories();
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