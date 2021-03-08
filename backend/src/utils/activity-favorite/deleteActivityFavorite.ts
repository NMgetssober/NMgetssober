import {connect} from "../database.utils";
import {activityFavorite} from "../interfaces/activityFavorite";

export async function deleteActivityFavorite(activityFavorite: activityFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `activityFavorite` WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, activityFavorite)
        return "Activity favorite successfully deleted"
    } catch(error) {
        console.log(error)
    }
}