import {Router} from "express";
import {activityTypeController} from "./activity-type.controller";


export const activityTypeRoute = Router();

activityTypeRoute.route('/')
    .post(activityTypeController)