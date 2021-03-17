import { Router } from 'express';
import {
    getActivityFavoriteByProfileIdController,
    toggleActivityFavoriteController
} from "./activity-favorite.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const activityFavoriteRoute = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
activityFavoriteRoute.route('/')
    .post(isLoggedIn, toggleActivityFavoriteController);

activityFavoriteRoute.route("/activityFavoritesByProfileId")
    .get(isLoggedIn, getActivityFavoriteByProfileIdController)