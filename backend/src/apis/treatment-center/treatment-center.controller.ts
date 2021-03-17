import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllTreatmentCenters} from "../../utils/treatment-center/selectAllTreatmentCenters";
import {selectTreatmentCentersByFacilityCategoryOrderByZipCode} from "../../utils/treatment-center/selectTreatmentCentersByFacilityCategoryOrderByZipCode";
import {selectTreatmentCenterByProfileId} from "../../utils/treatment-center/selectTreatmentCenterByProfileId";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatment-center/selectTreatmentCenterByTreatmentCenterId";
import {Profile} from "../../utils/interfaces/Profile";
const Geocodio = require('geocodio-library-node');

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
        //@ts-ignore
        const  profile: Profile = request.session?.profile
        const profileId = <string> profile.profileId
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



export async function getTreatmentCentersByFacilityCategoryOrderByZipCode(request: Request, response: Response) : Promise<Response> {
    try {
        console.log('start')
        const {facilityCategoryId, treatmentCenterZipCode} = request.params;
        const geocoder = new Geocodio(process.env.GEOCODE_KEY)
        const geoResponse = await geocoder.geocode(treatmentCenterZipCode)
        if (geoResponse.results[0] === undefined) {
            throw new Error("Please provide a valid zipcode.")
        }
        const mySqlResult = await selectTreatmentCentersByFacilityCategoryOrderByZipCode(facilityCategoryId, <number> geoResponse.results[0]['location']['lat'], <number> geoResponse.results[0]['location']['lng']);
        console.log('georesponse', geoResponse.results[0]['location'])
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