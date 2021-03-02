import {Schema} from "express-validator";

export const activityTypeValidator : Schema = {
    activityTypeId: {
        isUUID: {
            errorMessage: 'Please provide a valid activityTypeId'
        }
    },
}