import {Router} from "express";
import {facilityCategoryController} from "./facility-category.controller";
import {selectFacilityCategoryByFacilityCategoryName} from "../../utils/facility-category/selectFacilityCategoryByFacilityCategoryName";

export const facilityCategoryRoute = Router();

facilityCategoryRoute.route('/')
    .post(facilityCategoryController)

facilityCategoryRoute.route('/:facilityCategoryName')
    .get(selectFacilityCategoryByFacilityCategoryName)





