import {Router} from "express";
import {getActivityByProfileId, activityController} from "./activity.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .get(activityController)
    .post(getActivityByProfileId)

//need to GET the data for activity
//need to POST the data for the profileId