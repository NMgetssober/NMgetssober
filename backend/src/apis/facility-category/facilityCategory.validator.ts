import {Schema} from "express-validator";

export const facilityCategoryValidator : Schema = {
    facilityCategoryName: {

            errorMessage: 'Please provide a valid facility Category'
        }
   }