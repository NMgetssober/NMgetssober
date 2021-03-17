import {connect} from "../database.utils";

export async function selectActivityFavoritesByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityFavoriteActivityId) AS activityFavoriteActivityId,BIN_TO_UUID(activityFavoriteProfileId) AS activityFavoriteProfileId FROM activityFavorite WHERE activityFavoriteProfileId = UUID_TO_BIN(:profileId)', {profileId});
        return rows
    } catch (e) {
        console.error(e)
        return undefined
    }
}