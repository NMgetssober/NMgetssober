import {Router} from "express";
import {treatmentFavoriteController} from "./treatment-favorite.controller";

export const treatmentFavoriteRoute = Router();

treatmentFavoriteRoute.route('/')
    .get(treatmentFavoriteController)
