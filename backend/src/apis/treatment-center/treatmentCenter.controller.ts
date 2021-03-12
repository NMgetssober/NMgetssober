import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectTreatmentCenterByProfileId} from "../../utils/treatmentCenter/selectTreatmentCenterByProfileId";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatmentCenter/selectTreatmentCenterByTreatmentCenterId";
import {selectTreatmentCentersByFacilityCategoryOrderByZipCode} from "../../utils/treatmentCenter/selectTreatmentCentersByFacilityCategoryOrderByZipCode";
import {selectTreatmentCenterByAllTreatmentCenters} from "../../utils/treatmentCenter/selectTreatmentCenterByAllTreatmentCenters";


export async function getTreatmentCenterByProfileIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectTreatmentCenterByProfileId(profileId);
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

export async function getTreatmentCenterByAllTreatmentCenters(request: Request, response: Response) : Promise<Response>{
    try {
        const {allTreatmentCenters} = request.params;
        const mySqlResult = await selectTreatmentCenterByAllTreatmentCenters(allTreatmentCenters);
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

export async function getTreatmentCenterByTreatmentCenterId(request: Request, response: Response) : Promise<Response> {
    try {
        const {treatmentCenterId} = request.params;
        const mySqlResult = await selectTreatmentCenterByTreatmentCenterId(treatmentCenterId);
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

export async function getTreatmentCentersByFacilityCategoryOrderByZipCode(request: Request, response: Response) : Promise<Response> {
    try {
        const {treatmentCenterZipCode} = request.params;
        const mySqlResult = await selectTreatmentCentersByFacilityCategoryOrderByZipCode(treatmentCenterZipCode);
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



