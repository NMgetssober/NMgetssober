import {Router} from "express";
import {treatmentCenterCategoryController} from "./treatmentcenter-category.controller";
import {selectTreatmentCentersByTreatmentCentersId} from "../../utils/treatmentcenter-category/selectTreatmentCentersByTreatmentCentersId";


export const treatmentcCnterCategoryRoute = Router();

treatmentcCnterCategoryRoute.route('/')
    .post(treatmentCenterCategoryController)

treatmentcCnterCategoryRoute.route('/:activityTypeId')
    .get(selectTreatmentCentersByTreatmentCentersId)