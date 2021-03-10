import { Router } from 'express';
import {toggleActivityFavoriteController} from "./activity-favorite.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const router = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .post(isLoggedIn, toggleActivityFavoriteController);

export default router;