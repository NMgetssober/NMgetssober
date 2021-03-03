import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {profileValidator} from "./profile.validator";
import {getProfileByProfileId, putProfileController} from "./profile.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const profileRoute = Router();
profileRoute.route('/')
    .post(putProfileController);

profileRoute.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "Please provide a valid profileId").isUUID()
        ])
        , getProfileByProfileId
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)