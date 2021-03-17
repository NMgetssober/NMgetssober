import {Schema} from "express-validator";

export const treatmentFavoriteValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'Please provide a valid profileId'
        }
    },
}