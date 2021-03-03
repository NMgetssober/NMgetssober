import {Schema} from "express-validator";

export const activityValidator : Schema = {
    activityId: {
        isUUID: {
            errorMessage: 'Please provide a valid activityId'
        }
    },
}