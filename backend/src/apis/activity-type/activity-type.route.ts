import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {getAllActivityTypeController, getActivityTypeByActivityTypeId} from "./activity-type.controller";

export const activityTypeRoute = Router();

activityTypeRoute.route('/')
    .get(getAllActivityTypeController)

activityTypeRoute.route('/:activityTypeId')
    .get(asyncValidatorController([check("activityTypeId", "Please provide a valid activityTypeId").isUUID()]), getActivityTypeByActivityTypeId)
