import {Router} from "express";
import {activityFavoriteController} from "./activity-favorite.controller";

export const activityFavoriteRoute = Router();

activityFavoriteRoute.route('/')
    .get(activityFavoriteController)
