import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";

import {signinController} from "./sign-in.controller";
import {signinValidator} from "./sign-in.validator";


const {checkSchema} = require('express-validator');

export const signinRoute = Router();

signinRoute.route('/')
    .post(asyncValidatorController(checkSchema(signinValidator)), signinController);