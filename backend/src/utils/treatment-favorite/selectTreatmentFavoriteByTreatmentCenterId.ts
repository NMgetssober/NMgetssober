import {connect} from "../database.utils";
import {TreatmentFavorite} from "../interfaces/TreatmentFavorite";

export async function selectTreatmentFavoriteByTreatmentCenterId(treatmentFavorite: TreatmentFavorite) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(treatmentFavoriteTreatmentCenterId) as treatmentFavoriteTreatmentCenterId FROM treatmentFavorite WHERE treatmentFavoriteTreatmentCenterId = UUID_TO_BIN(:treatmentFavoriteTreatmentCenterId) AND treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, treatmentFavorite)
        return rows;

    } catch(error) {
        console.log(error)
    }
}