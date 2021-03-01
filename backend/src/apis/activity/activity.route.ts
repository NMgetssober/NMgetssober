import {Router} from "express";
import {activityController} from "./activity.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .get(activityController)

//need to GET the data for activity
//need to POST the data for the profileId