import {connect} from "../database.utils";

export async function selectActivityByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT activity.activityId, activity.activityCity, activity.activityDescription, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, activity.activityTime, activity.activityWebsite FROM activityFavorite INNER JOIN activity ON activityFavorite.activityFavoriteActivityId = activity.activityId WHERE activityFavorite.activityFavoriteProfileId = UUID_TO_BIN(:profileId)', {profileId});
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}

// getActivityByProfileId
// SELECT activity.activityId,
//     activity.activityCity,
//     activity.activityDescription,
//     activity.activityGroupName,
//     activity.activityStreet1,
//     activity.activityStreet2,
//     activity.activityTime,
//     activity.activityWebsite
// FROM activityFavorite
// INNER JOIN activity ON activityFavorite.activityFavoriteActivityId = activity.activityId
// WHERE activityFavorite.activityFavoriteActivityIdProfileId = UUID_TO_BIN(:profileId);