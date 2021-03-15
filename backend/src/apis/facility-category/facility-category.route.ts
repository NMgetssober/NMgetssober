import {Router} from "express";
import {selectAllFacilityCategories} from "../../utils/facility-category/selectAllFacilityCategories";


export const facilityCategoryRoute = Router();

facilityCategoryRoute.route('/:facilityCategoryName')
    .get(selectAllFacilityCategories)





