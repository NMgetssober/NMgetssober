import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {treatmentFavorite} from "../../utils/interfaces/treatmentFavorite";
import {selectTreatmentFavoriteByTreatmentFavoriteId} from "../../utils/treatment-favorite/selectTreatmentFavoriteByTreatmentFavoriteId";
import {deleteTreatmentFavorite} from "../../utils/treatment-favorite/deleteTreatmentFavorite";
import {insertTreatmentFavorite} from "../../utils/treatment-Favorite/insertTreatmentFavorite";


export async function toggleTreatmentFavoriteController(request: Request, response: Response) {

    try {
        const {treatmentFavoriteTweetId} = request.body;
        const profile: Profile = request.session?.profile
        const treatmentFavoriteProfileId = <string>profile.profileId

        const treatmentFavorite: treatmentFavorite = {
            treatmentFavoriteProfileId,
            TreatmentFavoriteDate: null,
        }
        const select = await selectTreatmentFavoriteByTreatmentFavoriteId(treatmentFavorite)
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