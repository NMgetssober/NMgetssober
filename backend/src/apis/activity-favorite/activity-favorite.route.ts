import {Router} from "express";
import {ActivityFavoriteController} from "./activity-favorite.controller";

export const activityFavoriteRoute = Router();

activityFavoriteRoute.route('/')
    .get(ActivityFavoriteController)
