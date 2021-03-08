import {Schema} from "express-validator";

export const serviceProvidedValidator : Schema = {
    serviceProvidedFacilityCategoryId: {
        isUUID: {
            errorMessage: 'Please provide a valid serviceProvidedId'
        }
    },
}