import {connect} from "../database.utils";
import {Activity} from "../interfaces/Activity";

export async function insertActivity(activity: Activity) : Promise<string>{
    try {

        const mysqlConnection = await connect()
        const query : string="INSERT INTO activity (activityId, activityCity, activityDescription, activityGroupName, activityStreet1, activityStreet2, activityTime, activityWebsite, activityZipCode) VALUES (UUID_TO_BIN(:activityId), :activityCity, :activityDescription, :activityGroupName, :activityStreet1, :activityStreet2, :activityTime, :activityWebsite, :activityZipCode)"
        const [rows] = await mysqlConnection.execute(query, activity)

        return "activity successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}