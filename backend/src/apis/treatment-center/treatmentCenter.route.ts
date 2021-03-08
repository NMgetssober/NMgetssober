import {Router} from "express";
import {treatmentCenterController} from "./treatmentcenter.controller";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatmentCenter/selectTreatmentCenterByTreatmentCenterId";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/')
    .post(treatmentCenterController)

treatmentCenterRoute.route('/:treatmentCenterId')
    .get(selectTreatmentCenterByTreatmentCenterId)