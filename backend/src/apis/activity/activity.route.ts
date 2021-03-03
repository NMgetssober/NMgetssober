import {Router} from "express";
import {activityController} from "./activity.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .get(activityController)