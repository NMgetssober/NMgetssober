import {Router} from "express";
import {getAllFacilityCategories} from "./facility-category.controller";


export const facilityCategoryRoute = Router();

facilityCategoryRoute.route('/')
    .get(getAllFacilityCategories)

