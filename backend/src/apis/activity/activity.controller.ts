import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityByProfileId} from "../../utils/activity/selectActivityByProfileId";
import {selectActivityByActivityId} from "../../utils/activity/selectActivityByActivityId";
import {selectActivityByActivityTypeIdOrderByZipCode} from "../../utils/activity/selectActivityByActivityTypeIdOrderByZipCode";
import {selectAllActivity} from "../../utils/activity/selectAllActivity";
import {selectActivityByActivityTypeId} from "../../utils/activity/selectActivityByActivityTypeId";
const Geocodio = require('geocodio-library-node');

export async function getAllActivityController(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllActivity();
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

export async function getActivityByProfileIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectActivityByProfileId(profileId);
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

export async function getActivitiesByActivityTypeId(request: Request, response: Response) : Promise<Response> {
    try {
        const {activityTypeId} = request.params;
        const mySqlResult = await selectActivityByActivityTypeId(activityTypeId);
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

export async function getActivityByActivityId(request: Request, response: Response) : Promise<Response> {
    try {
        const {activityId} = request.params;
        const mySqlResult = await selectActivityByActivityId(activityId);
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


export async function getActivityByActivityTypeIdOrderByZipCode(request: Request, response: Response) : Promise<Response> {
    try {
        console.log('start')
        const {activityTypeId, activityZipCode} = request.params;
        const geocoder = new Geocodio(process.env.GEOCODE_KEY)
        const geoResponse = await geocoder.geocode(activityZipCode)
        if (geoResponse.results[0] === undefined) {
            throw new Error("Please provide a valid zipcode.")
        }
        const mySqlResult = await selectActivityByActivityTypeIdOrderByZipCode(activityTypeId, <number> geoResponse.results[0]['location']['lat'], <number> geoResponse.results[0]['location']['lng']);
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

export async function getActivityOrderByZipCode(request: Request, response: Response) : Promise<Response> {
    try {

        const {activityZipCode} = request.params;
        const geocoder = new Geocodio(process.env.GEOCODE_KEY)
        const geoResponse = await geocoder.geocode(activityZipCode)
        if (geoResponse.results[0] === undefined) {
            throw new Error("Please provide a valid zipcode.")
        }
        const mySqlResult = await selectActivityByActivityTypeIdOrderByZipCode('', <number> geoResponse.results[0]['location']['lat'], <number> geoResponse.results[0]['location']['lng']);

        const data = mySqlResult ?? null

        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return(response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }
}