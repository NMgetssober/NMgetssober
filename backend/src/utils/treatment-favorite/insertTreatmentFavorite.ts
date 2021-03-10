import {connect} from "../database.utils";
import {TreatmentFavorite} from "../interfaces/TreatmentFavorite";

export async function insertTreatmentFavorite(treatmentFavorite: TreatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO treatmentFavorite(treatmentFavoriteProfileId,treatmentFavoriteTreatmentCenterId) VALUES (UUID_TO_BIN(:treatmentFavoriteProfileId),UUID_TO_BIN(:treatmentFavoriteTreatmentCenterId))"
        const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentFavorite)
        return "Favorite successfully inserted"
    } catch(error) {
        console.log(error)
    }
}