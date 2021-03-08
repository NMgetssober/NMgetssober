import {Tweet} from "../interfaces/Tweet";
import {connect} from "../database.utils";
import {treatmentFavorite} from "../interfaces/treatmentFavorite";

export async function insertTreatmentFavorite(TreatmentFavorite: treatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `treatmentFavorite`(treatmentFavoriteProfileId, treatmentFavoriteTweetId, treatmentFavoriteDate) VALUES(UUID_TO_BIN(:treatmentFavoriteProfileId), UUID_TO_BIN(:treatmentFavoriteTweetId), NOW())";
        const [rows] = await mySqlConnection.execute(mySqlQuery, TreatmentFavorite)
        return "Treatment Center favorite successfully saved"
    } catch(error) {
        console.log(error)
    }
}