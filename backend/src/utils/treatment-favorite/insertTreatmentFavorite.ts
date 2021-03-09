import {connect} from "../database.utils";
import {TreatmentFavorite} from "../interfaces/TreatmentFavorite";

export async function insertTreatmentFavorite(treatmentFavorite: TreatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `treatmentFavorite`(treatmentFavoriteProfileId, treatmentFavoriteDate) VALUES(UUID_TO_BIN(:treatmentFavoriteProfileId), NOW())";
        const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentFavorite)
        return "Treatment Center favorite successfully saved"
    } catch(error) {
        console.log(error)
    }
}