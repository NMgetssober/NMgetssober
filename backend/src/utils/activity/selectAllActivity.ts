import {connect} from "../database.utils";

export async function selectAllActivity() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, CONVERT(activityDescription USING utf8) AS activityDescription, activity.activityGroupName, activity.activityLat, activity.activityLong, activity.activityStreet1, activity.activityStreet2, activity.activityTime, activity.activityWebsite, activity.activityZipCode FROM activity';
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        console.log('rows', rows)
        return rows;
    } catch (error) {
        console.log(error)
    }
}