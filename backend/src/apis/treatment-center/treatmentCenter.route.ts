import {Router} from "express";
import {
    getTreatmentCenterByAllTreatmentCenters,
    getTreatmentCenterByProfileIdController,
    getTreatmentCenterByTreatmentCenterId,
    getTreatmentCentersByFacilityCategoryOrderByZipCode
} from "./treatmentcenter.controller";
import {check} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/:')
    .post(getTreatmentCenterByProfileIdController)

treatmentCenterRoute.route('/:allTreatmentCenters')
    .get(asyncValidatorController([check("allTreatmentCenters", "Please provide all treatment centers")]),getTreatmentCenterByAllTreatmentCenters)

treatmentCenterRoute.route('/:treatmentCenterId')
    .get(asyncValidatorController([check("treatmentCenterId", "Please provide a valid treatmentCenterId").isUUID()]),getTreatmentCenterByTreatmentCenterId)

treatmentCenterRoute.route('/:treatmentCenterZipCode')
    .get(asyncValidatorController([check("treatmentCenterZipCode", "Please provide a valid treatmentCenterZipCode")]),getTreatmentCentersByFacilityCategoryOrderByZipCode)

