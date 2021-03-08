import {Tweet} from "../interfaces/Tweet";
import {connect} from "../database.utils";
import {activityFavorite} from "../interfaces/ActivityFavorite";

export async function insertActivityFavorite(ActivityFavorite: activityFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `activityFavorite`(activityFavoriteProfileId, activityFavoriteTweetId, activityFavoriteDate) VALUES(UUID_TO_BIN(:activityFavoriteProfileId), UUID_TO_BIN(:activityFavoriteTweetId), NOW())";
        const [rows] = await mySqlConnection.execute(mySqlQuery, ActivityFavorite)
        return "Activity favorite successfully inserted"
    } catch(error) {
        console.log(error)
    }
}