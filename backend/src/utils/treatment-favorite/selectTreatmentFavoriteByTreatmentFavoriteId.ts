import {connect} from "../database.utils";
import {treatmentFavorite} from "../interfaces/treatmentFavorite";

export async function selectTreatmentFavoriteByTreatmentFavoriteId(treatmentFavorite: treatmentFavorite) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(treatmentFavoriteProfileId) as treatmentFavoriteProfileId, treatmentFavoriteDate FROM `treatmentFavorite` WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, treatmentFavorite)
        return rows;

    } catch(error) {
        console.log(error)
    }
}