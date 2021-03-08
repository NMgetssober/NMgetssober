import {Router} from "express";
import {getActivityByProfileIdController, getActivityByActivityId} from "./activity.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .get(getActivityByProfileIdController)

activityRoute.route('/:activityId')
    .get(asyncValidatorController([check("activityId", "Please provide a valid activityId").isUUID()]),getActivityByActivityId)