import {Schema} from "express-validator";

export const activityFavoriteValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'Please provide a valid profileId'
        }
    },
}