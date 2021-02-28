import {connect} from "../database.utils";

export async function getActivityByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT profile.profileId, activity.activityId FROM activityFavorite INNER JOIN profile ON activityFavorite.activityFavoriteProfileId = profile.profileId INNER JOIN activity ON activityFavorite.activityFavoriteActivityId = activity.activityId WHERE profileId = UUID_TO_BIN(:profileId)', {profileId});
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}