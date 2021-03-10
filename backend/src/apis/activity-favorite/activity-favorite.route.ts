import { Router } from 'express';
import {toggleActivityFavoriteController} from "./activity-favorite.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const activityFavoriteRoute = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
activityFavoriteRoute.route('/')
    .post(isLoggedIn, toggleActivityFavoriteController);

export default activityFavoriteRoute;