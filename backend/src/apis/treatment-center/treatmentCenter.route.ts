import {Router} from "express";
import {getTreatmentCenterByProfileIdController} from "./treatmentcenter.controller";
import {getTreatmentCenterByTreatmentCenterIdController} from "./treatmentcenter.controller";
import {getTreatmentCentersByFacilityCategoryOrderByZipCodeController} from "./treatmentcenter.controller";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/:profileId')
    .post(getTreatmentCenterByProfileIdController)

treatmentCenterRoute.route('/:treatmentCenterId')
    .get(getTreatmentCenterByTreatmentCenterIdController)

treatmentCenterRoute.route('/:treatmentCenterZipCode')
    .get(getTreatmentCentersByFacilityCategoryOrderByZipCodeController)