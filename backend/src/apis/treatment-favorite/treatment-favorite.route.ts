import { Router } from 'express';
import {toggleTreatmentFavoriteController} from "./treatment-favorite.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const treatmentFavoriteRoute = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
treatmentFavoriteRoute.route('/')
    .post(isLoggedIn, toggleTreatmentFavoriteController);

export default treatmentFavoriteRoute;