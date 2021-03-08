import {Router} from "express";
import {treatmentCenterCategoryController} from "./treatmentCenter-category.controller";
import {selectTreatmentCentersByTreatmentCentersId} from "../../utils/serviceProvided/selectTreatmentCenterByTreatmentCenterId";


export const treatmentcCnterCategoryRoute = Router();

treatmentcCnterCategoryRoute.route('/')
    .post(treatmentCenterCategoryController)

treatmentcCnterCategoryRoute.route('/:activityTypeId')
    .get(selectTreatmentCentersByTreatmentCentersId)