import {Router} from "express";
import {getTreatmentCenterByProfileIdController} from "./treatmentcenter.controller";
import {selectTreatmentCenterByTreatmentCenterId} from "../../utils/treatmentCenter/selectTreatmentCenterByTreatmentCenterId";


export const treatmentCenterRoute = Router();

treatmentCenterRoute.route('/')
    .post(getTreatmentCenterByProfileIdController)

treatmentCenterRoute.route('/:treatmentCenterId')
    .get(selectTreatmentCenterByTreatmentCenterId)