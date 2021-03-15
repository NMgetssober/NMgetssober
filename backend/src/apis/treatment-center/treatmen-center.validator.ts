import {Schema} from "express-validator";

export const treatmentCenterValidator : Schema = {
    treatmentCenterId: {
        isUUID: {
            errorMessage: 'Please provide a valid treatment center'
        }
    },
}