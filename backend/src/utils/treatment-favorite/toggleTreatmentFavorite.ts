import {connect} from "../database.utils";
import {treatmentFavorite} from "../interfaces/treatmentFavorite";

export async function toggleTreatmentFavorite(treatmentFavorite: treatmentFavorite) {
    try {
        console.log('treatmentFavorite', treatmentFavorite)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(treatmentFavoriteProfileId) as treatmentFavoriteProfileId, treatmentFavoriteDate FROM `treatmentFavorite` WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
        // const mySqlSelectQuery = 'SELECT EXISTS (SELECT * FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId))'
        // const mySqlSelectQuery = 'SELECT COUNT(*) FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeTweetId = UUID_TO_BIN(:likeTweetId))'

        const [treatmentFavoriteRows] = await mysqlConnection.execute(mySqlSelectQuery, treatmentFavorite)
        // @ts-ignore
        console.log('treatmentFavoriteRows', treatmentFavoriteRows)
        // @ts-ignore
        if (treatmentFavoriteRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `treatmentFavorite` WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:treatmentFavoriteProfileId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, treatmentFavorite)
            console.log('REMOVED TREATMENT FAVORITE')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO `treatmentFavorite`(treatmentFavoriteProfileId, treatmentFavoriteDate) VALUES(UUID_TO_BIN(:treatmentFavoriteProfileId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentFavorite)
            console.log('ADDED TREATMENT FAVORITE')

        }


        return "Treatment favorite toggled successfully"
    } catch (error) {
        console.log(error)
    }
}