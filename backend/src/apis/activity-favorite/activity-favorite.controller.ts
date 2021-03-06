import {Request, Response} from 'express';

import {ActivityFavorite} from "../../utils/interfaces/ActivityFavorite";
import {deleteActivityFavorite} from "../../utils/activity-favorite/deleteActivityFavorite";
import {insertActivityFavorite} from "../../utils/activity-favorite/insertActivityFavorite";
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {selectActivityFavoriteByActivityFavoriteId,
} from "../../utils/activity-favorite/selectActivityFavoriteByActivityFavoriteId";
import {selectActivityFavoritesByProfileId} from "../../utils/activity-favorite/selectActivityFavoritesByProfileId";


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
        console.log(activityFavorite)
        const select = await selectActivityFavoriteByActivityFavoriteId(activityFavorite)

        // @ts-ignore
        console.log(select[0])
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


export async function getActivityFavoriteByProfileIdController(request: Request, response: Response) : Promise<Response> {
    try {
        // @ts-ignore mis-match with session.
        const profile: Profile = request.session?.profile
        const profileId = <string>profile.profileId
        const mySqlResult = await selectActivityFavoritesByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return(response.json({
            status: 400,
            data: null,
            message: error.message
        }))
    }
}