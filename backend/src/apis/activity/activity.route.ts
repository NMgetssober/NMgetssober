import {Router} from "express";
import {
    getActivityByProfileIdController,
    getActivityByActivityId,
    getActivityByActivityTypeIdOrderByZipCode
} from "./activity.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const activityRoute = Router();

activityRoute.route('/profileId/:profileId')
    .get(isLoggedIn, asyncValidatorController([check("profileId", "Please provide a valid profileId").isUUID()]), getActivityByProfileIdController)

activityRoute.route('/:activityId')
    .get(asyncValidatorController([check("activityId", "Please provide a valid activityId").isUUID()]),getActivityByActivityId)

activityRoute.route('/activityTypeId/:activityTypeId')
    .get(asyncValidatorController([check("activityTypeId", "Please provide a valid activityId").isUUID()]),getActivityByActivityTypeIdOrderByZipCode)