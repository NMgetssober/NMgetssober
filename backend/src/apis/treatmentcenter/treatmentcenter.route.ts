import {Router} from "express";
import {activityController, getActivityByActivityId} from "./activity.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .post(activityController)

activityRoute.route('/:activityId')
    .get(getActivityByActivityId)