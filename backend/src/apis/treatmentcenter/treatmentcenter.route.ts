import {Router} from "express";
import {treatmentCenterController} from "./treatmentcenter.controller";

export const treatmentcenterRoute = Router();

treatmentcenterRoute.route('/')
    .post(treatmentCenterController)

treatmentcenterRoute.route('/:treatmentCenterId')
    .get(selectTreatmentCenterByTreatmentCenterId)