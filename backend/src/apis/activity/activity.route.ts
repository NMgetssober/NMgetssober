import {Router} from "express";
import {
    getActivityByProfileIdController,
    getActivityByActivityId,
    getActivityByActivityTypeIdOrderByZipCode, getAllActivityController
} from "./activity.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .get(getAllActivityController)

activityRoute.route('/profileId/:profileId')
    .get(isLoggedIn, asyncValidatorController([check("profileId", "Please provide a valid profileId").isUUID()]), getActivityByProfileIdController)

activityRoute.route('/:activityId')
    .get(asyncValidatorController([check("activityId", "Please provide a valid activityId").isUUID()]),getActivityByActivityId)

activityRoute.route('/activityTypeId/:activityTypeId/activityZip/:activityZip')
    .get(asyncValidatorController([check("activityTypeId", "Please provide a valid activityId").isUUID(), check("activityZip", "Please provide a valid zipcode.").isPostalCode("US")]),getActivityByActivityTypeIdOrderByZipCode)