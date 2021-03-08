import {Router} from "express";
import {activityTypeController} from "./activity-type.controller";
import {selectActivityTypeByActivityTypeId} from "../../utils/activty-type/selectActivityTypeByActivityTypeId";


export const activityTypeRoute = Router();

activityTypeRoute.route('/')
    .get(getActivityTypebyActivityTypeIdController)

activityTypeRoute.route('/:activityTypeId')
    .get(selectActivityTypeByActivityTypeId)
//validated