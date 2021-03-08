import {connect} from "../database.utils";
import {treatmentFavorite} from "../interfaces/treatmentFavorite";

export async function deleteTreatmentFavorite(treatmentFavorite: treatmentFavorite) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `treatmentFavorite` WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, treatmentFavorite)
        return "Treatment favorite successfully deleted"
    } catch(error) {
        console.log(error)
    }
}