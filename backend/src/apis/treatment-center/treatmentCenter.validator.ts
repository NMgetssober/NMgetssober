import {Schema} from "express-validator";

export const treatmentCenter : Schema = {
    treatmentCenterId: {
        isUUID: {
            errorMessage: 'Please provide a valid treatment center'
        }
    },
}