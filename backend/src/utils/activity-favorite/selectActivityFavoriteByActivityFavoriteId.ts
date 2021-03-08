import {connect} from "../database.utils";
import {activityFavorite} from "../interfaces/activityFavorite";

export async function selectActivityFavoriteByActivityFavoriteId(activityFavorite: activityFavorite) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeProfileId) as activityFavoriteProfileId, activityFavoriteDate FROM `activityFavorite` WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, activityFavorite)
        return rows;

    } catch(error) {
        console.log(error)
    }
}