import {Router} from "express";
import {activityFavoriteController} from "./activity.controller";

export const activityRoute = Router();

activityRoute.route('/')
    .post(activityFavoriteController)