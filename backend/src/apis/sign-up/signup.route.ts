import {Router} from 'express';

const {checkSchema} = require('express-validator');

export const router = Router();

router.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    );

router.route('activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]), activationController
    )

