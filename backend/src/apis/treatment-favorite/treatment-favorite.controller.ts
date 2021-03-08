import {Request, Response} from 'express';

// DB

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {treatmentFavorite} from "../../utils/interfaces/treatmentFavorite";
import {selectTreatmentFavoriteByTreatmentCenterId} from "../../utils/treatment-favorrite/selectTreatmentFavoriteByTreatmentCenterId";
import {deleteTreatmentFavorite} from "../../utils/treatment-favorite/deleteTreatmentFavorite";
import {insertTreatmentFavorite} from "../../utils/treatment-Favorite/insertTreatmentFavorite";


export async function toggleTreatmentFavoriteController(request: Request, response: Response) {

    try {
        const {treatmentFavoriteTweetId} = request.body;
        const profile: Profile = request.session?.profile
        const treatmentFavoriteProfileId = <string>profile.profileId

        const treatmentFavorite: treatmentFavorite = {
            treatmentFavoriteProfileId,
            treatmentFavoriteTweetId,
            TreatmentFavoriteDate: null,
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