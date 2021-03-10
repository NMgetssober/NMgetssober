import {Schema} from "express-validator";

export const facilityCategoryValidator : Schema = {
    serviceProvidedFacilityCategoryId: {
        isUUID: {
            errorMessage: 'Please provide a valid serviceProvidedId'
        }
    },
}