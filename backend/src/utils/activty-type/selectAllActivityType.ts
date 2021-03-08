import {connect} from "../database.utils";

export async function selectAllActivityType() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(activityTypeId) AS activityTypeId, activityTypeName FROM activityType';
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}