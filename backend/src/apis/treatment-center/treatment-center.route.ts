import {Router} from "express";
import {
    getAllTreatmentCenters, getTreatmentCenterByProfileId,
    getTreatmentCenterByTreatmentCenterId,
    // getTreatmentCentersByFacilityCategoryOrderByZipCode
} from "./treatment-center.controller";
import {check} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/')
    .get(getAllTreatmentCenters)

treatmentCenterRoute.route('/profileId/:profileId')
    .get(asyncValidatorController([check("profiled", "Please provide a valid profileId").isUUID()]),getTreatmentCenterByProfileId)

treatmentCenterRoute.route('/treatmentCenterId/:treatmentCenterId')
    .get(asyncValidatorController([check("treatmentCenterId", "Please provide a valid treatmentCenterId").isUUID()]),getTreatmentCenterByTreatmentCenterId)
//
// treatmentCenterRoute.route('facilityCategoryId/:facilityCategoryId/treatmentCenterZipCode/:treatmentCenterZipCode')
//     .get(asyncValidatorController([check("treatmentCenterZipCode", "Please provide a valid treatmentCenterZipCode")]),getTreatmentCentersByFacilityCategoryOrderByZipCode)

