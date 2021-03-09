import {Router} from "express";
import {getActivityByProfileIdController, getActivityByActivityId} from "./activity.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const activityRoute = Router();

activityRoute.route('/:profileId')
    .get(getActivityByProfileIdController)

activityRoute.route('/:activityId')
    .get(asyncValidatorController([check("activityId", "Please provide a valid activityId").isUUID()]),getActivityByActivityId)