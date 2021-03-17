import {connect} from "../database.utils";
import {TreatmentFavorite} from "../interfaces/TreatmentFavorite";

export async function deleteTreatmentFavorite(treatmentFavorite: TreatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM treatmentFavorite WHERE treatmentFavoriteTreatmentCenterId = UUID_TO_BIN(:treatmentFavoriteTreatmentCenterId) AND treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, treatmentFavorite)
        return "Treatment favorite successfully deleted"
    } catch(error) {
        console.log(error)
    }
}