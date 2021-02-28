import {Router} from "express";
import {activityTypeController, getActivityByZipCodeAndCategory} from "./activity-type.controller";


export const activityTypeRoute = Router();

activityTypeRoute.route('/')
    .get(activityTypeController)
    .post(getActivityByZipCodeAndCategory);