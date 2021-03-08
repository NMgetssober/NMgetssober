import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatmentCenter/selectTreatmentCenterByTreatmentCenterId";

export async function facilityCategoryController(request: Request, response: Response) : Promise<Response> {
    try {
        const {serviceProvidedFacilityCategoryId} = request.params;
        const mySqlResult = await selectTreatmentCenterByTreatmentCenterId(serviceProvidedFacilityCategoryId);
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