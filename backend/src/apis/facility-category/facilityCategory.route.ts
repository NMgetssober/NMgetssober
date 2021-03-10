import {Router} from "express";
import {facilityCategoryController} from "./facilityCategory.controller";
import {selectFacilityCategoryByFacilityCategoryName} from "../../utils/facilityCategory/selectFacilityCategoryByFacilityCategoryName";


export const facilityCategoryRoute = Router();

facilityCategoryRoute.route('/')
    .post(facilityCategoryController)

facilityCategoryRoute.route('/:facilityCategory')
    .get(selectFacilityCategoryByFacilityCategoryName)