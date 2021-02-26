import {NextFunction, Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";

export async function activationController(request: Request, response: Response, nextFuntion: NextFunction) {
    const {activation} = request.params
    try {
        const profile = await
    }
}