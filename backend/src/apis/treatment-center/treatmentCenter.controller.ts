import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectTreatmentCentersByProfileId} from "../../utils/treatmentCenter/selectTreatmentCentersByProfileId";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatmentCenter/selectTreatmentCenterByTreatmentCenterId";

export async function treatmentCenterController(request: Request, response: Response): Promise<Response> {

    try {
        const {treatmentCentersByProfileId} = request.params;
        const mySqlResult = await selectTreatmentCentersByProfileId(treatmentCentersByProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return (response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }


    try {
        const {treatmentCentersByTreatmentCentersId} = request.params;
        const mySqlResult = await selectTreatmentCenterByTreatmentCenterId(treatmentCentersByTreatmentCentersId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return (response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }
}