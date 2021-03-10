import {connect} from "../database.utils";
import {ActivityFavorite} from "../interfaces/ActivityFavorite";

export async function selectActivityFavoriteByActivityProfileId(activityFavorite: ActivityFavorite) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(activityFavoriteProfileId) as activityFavoriteProfileId, activityFavoriteDate FROM `activityFavorite` WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, activityFavorite)
        return rows;

    } catch(error) {
        console.log(error)
    }
}