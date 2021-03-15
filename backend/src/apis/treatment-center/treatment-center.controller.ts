import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllTreatmentCenters} from "../../utils/treatment-center/selectAllTreatmentCenters";
// import {selectTreatmentCentersByFacilityCategoryOrderByZipCode} from "../../utils/treatment-center/selectTreatmentCentersByFacilityCategoryOrderByZipCode";
import {selectTreatmentCenterByProfileId} from "../../utils/treatment-center/selectTreatmentCenterByProfileId";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatment-center/selectTreatmentCenterByTreatmentCenterId";


export async function getAllTreatmentCenters(request: Request, response: Response) : Promise<Response>{
    try {
        const mySqlResult = await selectAllTreatmentCenters()
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

export async function getTreatmentCenterByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const     {profileId} = request.params
        const mySqlResult = await selectTreatmentCenterByProfileId(profileId)
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
        const     {treatmentCenterId} = request.params
        const mySqlResult = await selectTreatmentCenterByTreatmentCenterId(treatmentCenterId)
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
//
//
// export async function getTreatmentCentersByFacilityCategoryOrderByZipCode(request: Request, response: Response) : Promise<Response> {
//     try {
//         const     {treatmentCenterZipCode} = request.params
//         const mySqlResult = await selectTreatmentCentersByFacilityCategoryOrderByZipCode(treatmentCenterZipCode)
//         const data = mySqlResult ?? null
//         const status: Status = {status: 200, data, message: 'good'}
//         return response.json(status)
//     } catch (error) {
//         return(response.json({
//             status: 400,
//             data: null,
//             message: error.message
//         }))
//     }
// }

