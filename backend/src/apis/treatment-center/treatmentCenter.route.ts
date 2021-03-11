import {Router} from "express";
import {getTreatmentCenterByProfileIdController, getTreatmentCenterByTreatmentCenterId, getTreatmentCentersByFacilityCategoryOrderByZipCode} from "./treatmentcenter.controller";
import {check} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/:')
    .post(getTreatmentCenterByProfileIdController)

treatmentCenterRoute.route('/:treatmentCenterId')
    .get(asyncValidatorController([check("treatmentCenterId", "Please provide a valid treatmentCenterId").isUUID()]),getTreatmentCenterByTreatmentCenterId)

treatmentCenterRoute.route('/:treatmentCenterZipCode')
    .get(asyncValidatorController([check("treatmentCenterZipCode", "Please provide a valid treatmentCenterZipCode")]),getTreatmentCentersByFacilityCategoryOrderByZipCode)

