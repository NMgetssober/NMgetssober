import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectTreatmentCentersByTreatmentCentersId} from "../../utils/treatmentcenter-category/selectTreatmentCentersByTreatmentCentersId";

export async function treatmentCenterCategoryController(request: Request, response: Response) : Promise<Response> {
    try {
        const {serviceProvidedFacilityCategoryId} = request.params;
        const mySqlResult = await selectTreatmentCentersByTreatmentCentersId(serviceProvidedFacilityCategoryId);
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