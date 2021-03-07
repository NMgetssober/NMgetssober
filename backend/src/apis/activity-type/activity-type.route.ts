import {Router} from "express";
import {activityTypeController} from "./activity-type.controller";
import {selectActivityTypeByActivityTypeId} from "../../utils/activty-type/selectActivityTypeByActivityTypeId";


export const activityTypeRoute = Router();

activityTypeRoute.route('/')
    .post(activityTypeController)

activityTypeRoute.route('/:activityTypeId')
    .get(selectActivityTypeByActivityTypeId)
