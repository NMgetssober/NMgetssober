import {Request, Response} from 'express';
import {ActivityFavorite} from "../../utils/interfaces/ActivityFavorite";
import {deleteActivityFavorite} from "../../utils/activity-favorite/deleteActivityFavorite";
import {insertActivityFavorite} from "../../utils/activity-favorite/insertActivityFavorite";
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityFavoriteByActivityFavoriteId,
} from "../../utils/activity-favorite/selectActivityFavoriteByActivityFavoriteId";


export async function toggleActivityFavoriteController(request: Request, response: Response) {

    try {
        const {activityFavoriteActivityId} = request.body;
        // @ts-ignore mis-match with session.
        const profile: Profile = request.session?.profile
        const activityFavoriteProfileId = <string>profile.profileId

        const activityFavorite: ActivityFavorite = {
            activityFavoriteActivityId,
            activityFavoriteProfileId,

        }
        const select = await selectActivityFavoriteByActivityFavoriteId(activityFavorite)
        // @ts-ignore
        if (select[0]){
            const result = await deleteActivityFavorite(activityFavorite)
        }else{
            const result = await insertActivityFavorite(activityFavorite)
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