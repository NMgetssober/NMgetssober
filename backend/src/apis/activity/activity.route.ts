import {Router} from "express";
import {
    getActivityByProfileIdController,
    getActivityByActivityId,
    getActivityByActivityTypeIdOrderByZipCode
} from "./activity.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const activityRoute = Router();

activityRoute.route('/profileId/:profileId')
    .get(getActivityByProfileIdController)

activityRoute.route('/:activityId')
    .get(asyncValidatorController([check("activityId", "Please provide a valid activityId").isUUID()]),getActivityByActivityId)

activityRoute.route('/activityTypeId/:activityTypeId')
    .get(asyncValidatorController([check("activityTypeId", "Please provide a valid activityId").isUUID()]),getActivityByActivityTypeIdOrderByZipCode)