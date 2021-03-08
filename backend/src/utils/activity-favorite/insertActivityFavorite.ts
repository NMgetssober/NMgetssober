import {connect} from "../database.utils";
import {activityFavorite} from "../interfaces/activityFavorite";

export async function insertActivityFavorite(activityFavorite: activityFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `activityFavorite`(activityFavoriteProfileId, activityFavoriteDate) VALUES(UUID_TO_BIN(:activityFavoriteProfileId), NOW())";
        const [rows] = await mySqlConnection.execute(mySqlQuery, activityFavorite)
        return "Activity favorite successfully inserted"
    } catch(error) {
        console.log(error)
    }
}