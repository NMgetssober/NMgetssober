import {connect} from "../database.utils";
import {TreatmentFavorite} from "../interfaces/TreatmentFavorite";

export async function toggleActivityFavorite(treatmentFavorite: TreatmentFavorite) {
    try {
        console.log('treatmentFavorite', treatmentFavorite)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(treatmentFavoriteProfileId) as treatmentFavoriteProfileId FROM treatmentFavorite WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'

        const [treatmentFavoriteRows] = await mysqlConnection.execute(mySqlSelectQuery, treatmentFavorite)
        // @ts-ignore
        console.log('treatmentFavoriteRows', treatmentFavoriteRows)
        // @ts-ignore
        if (treatmentFavoriteRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM treatmentFavorite WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, treatmentFavorite)
            console.log('REMOVED ACTIVITY FAVORITE')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO treatmentFavorite (treatmentFavoriteProfileId) VALUES(UUID_TO_BIN(:treatmentFavoriteProfileId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentFavorite)
            console.log('ADDED TREATMENT FAVORITE')

        }


        return "Treatment favorite toggled successfully"
    } catch (error) {
        console.log(error)
    }
}