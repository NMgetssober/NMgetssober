import {connect} from "../database.utils";
import {ActivityFavorite} from "../interfaces/activityFavorite";

export async function toggleActivityFavorite(activityFavorite: ActivityFavorite) {
    try {
        console.log('activityFavorite', activityFavorite)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(activityFavoriteProfileId) as activityFavoriteProfileId, BIN_TO_UUID(likeTweetId) as activityFavoriteDate FROM `activityFavorite` WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
        // const mySqlSelectQuery = 'SELECT EXISTS (SELECT * FROM `activityFavorite` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId))'
        // const mySqlSelectQuery = 'SELECT COUNT(*) FROM `activityFavorite` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId))'

        const [activityFavoriteRows] = await mysqlConnection.execute(mySqlSelectQuery, activityFavorite)
        // @ts-ignore
        console.log('activityFavoriteRows', activityFavoriteRows)
        // @ts-ignore
        if (activityFavoriteRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `activityFavorite` WHERE activityFavoriteProfileId = UUID_TO_BIN(:activityFavoriteProfileId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, activityFavorite)
            console.log('REMOVED ACTIVITY FAVORITE')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO `activityFavorite`(activityFavoriteProfileId, activityFavoriteDate) VALUES(UUID_TO_BIN(:activityFavoriteProfileId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, activityFavorite)
            console.log('ADDED ACTIVITY FAVORITE')

        }


        return "Activity favorite toggled successfully"
    } catch (error) {
        console.log(error)
    }
}