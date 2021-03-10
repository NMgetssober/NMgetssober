import {Request, Response} from 'express';

import {TreatmentFavorite} from "../../utils/interfaces/TreatmentFavorite";

import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {selectTreatmentFavoriteByTreatmentCenterId} from "../../utils/treatment-favorite/selectTreatmentFavoriteByTreatmentCenterId";
import {deleteTreatmentFavorite} from "../../utils/treatment-favorite/deleteTreatmentFavorite";
import {insertTreatmentFavorite} from "../../utils/treatment-favorite/insertTreatmentFavorite";



export async function toggleTreatmentFavoriteController(request: Request, response: Response) {

    try {
        const {treatmentFavoriteTreatmentCenterId} = request.body;
        // @ts-ignore mis-match with session.
        const profile: Profile = request.session?.profile
        const treatmentFavoriteProfileId = <string>profile.profileId

        const treatmentFavorite: TreatmentFavorite = {
            treatmentFavoriteProfileId,
            treatmentFavoriteTreatmentCenterId,

        }
        const select = await selectTreatmentFavoriteByTreatmentCenterId(treatmentFavorite)
        // @ts-ignore
        if (select[0]){
            const result = await deleteTreatmentFavorite(treatmentFavorite)
        }else{
            const result = await insertTreatmentFavorite(treatmentFavorite)
        }

        const status: Status = {
            status: 200,
            message: 'Favorite successfully updated',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}