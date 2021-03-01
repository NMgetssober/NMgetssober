import {Router} from 'express';
import {param} from "express-validator";
import {activationController} from "./activation.controller";
import {signupProfileController} from "./signup.controller";
import {signupValidator} from "./signup.validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";

const {checkSchema} = require('express-validator');

export const signupRoute = Router();

signupRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    );

signupRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]), activationController
    )

