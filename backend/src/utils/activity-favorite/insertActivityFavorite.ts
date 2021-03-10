import {connect} from "../database.utils";
import {ActivityFavorite} from "../interfaces/ActivityFavorite";

export async function insertActivityFavorite(activityFavorite: ActivityFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO activityFavorite (activityFavoriteActivityId, activityFavoriteProfileId) VALUES(UUID_TO_BIN(:activityFavoriteActivityId), UUID_TO_BIN(:activityFavoriteProfileId))"
        const [rows] = await mySqlConnection.execute(mySqlQuery, activityFavorite)
        return "Activity favorite successfully inserted"
    } catch(error) {
        console.log(error)
    }
}