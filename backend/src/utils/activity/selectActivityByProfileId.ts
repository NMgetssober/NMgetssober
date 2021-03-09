import {connect} from "../database.utils";

export async function selectActivityByProfileId(profileId: string) {
    try {
        console.log('start')
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, CONVERT(activityDescription USING utf8) AS activityDescription, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, activity.activityTime, activity.activityWebsite FROM activityFavorite INNER JOIN activity ON activity.activityId = activityFavorite.activityFavoriteActivityId WHERE activityFavoriteProfileId = UUID_TO_BIN(:profileId)', {profileId});
        console.log('rows', rows)
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}