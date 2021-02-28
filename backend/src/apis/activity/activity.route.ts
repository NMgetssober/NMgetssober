import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {activityValidator} from "./activity.validator";
import {getActivityByProfileId, activityController} from "./activity.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const activityRoute = Router();

activityRoute.route('/')
    .get(activityController)

//need to GET the data for activity
//need to POST the data for the profileId