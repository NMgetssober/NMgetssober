import {Tweet} from "../interfaces/Tweet";
import {connect} from "../database.utils";
import {treatmentFavorite} from "../interfaces/treatmentFavorite";

export async function deleteTreatmentFavorite(TreatmentFavorite: treatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `treatmentFavorite` WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId) AND treatmentFavoriteTweetId = UUID_TO_BIN(:treatmentFavoriteTweetId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, TreatmentFavorite)
        return "Treatment favorite successfully deleted"
    } catch(error) {
        console.log(error)
    }
}