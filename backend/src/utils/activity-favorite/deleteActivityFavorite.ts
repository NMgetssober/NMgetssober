import {connect} from "../database.utils";
import {ActivityFavorite} from "../interfaces/ActivityFavorite";

export async function deleteActivityFavorite(activityFavorite: ActivityFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM activityFavorite WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, activityFavorite)
        return "Activity favorite successfully deleted"
    } catch(error) {
        console.log(error)
    }
}