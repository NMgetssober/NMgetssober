import {Router} from "express";
import {
    getAllTreatmentCenters, getTreatmentCenterByProfileId,
    getTreatmentCenterByTreatmentCenterId,
    getTreatmentCentersByFacilityCategoryOrderByZipCode
} from "./treatment-center.controller";
import {check} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/')
    .get(getAllTreatmentCenters)

treatmentCenterRoute.route('/profileId')
    .get (isLoggedIn, getTreatmentCenterByProfileId)

treatmentCenterRoute.route('/treatmentCenterId/:treatmentCenterId')
    .get(asyncValidatorController([check("treatmentCenterId", "Please provide a valid treatmentCenterId").isUUID()]),getTreatmentCenterByTreatmentCenterId)

treatmentCenterRoute.route('/facilityCategoryId/:facilityCategoryId/treatmentCenterZipCode/:treatmentCenterZipCode')
    .get(asyncValidatorController([check("facilityCategoryId", "Please provide a valid treatmentCenterZipCode").isUUID()]),
            getTreatmentCentersByFacilityCategoryOrderByZipCode)

// Cannot GET /apis/treatment-center/facilityCategoryId/01043648-8360-11eb-bb64-0242ac180002/treatmentCenterZipCode/87123