import {connect} from "../database.utils";
import {Activity} from "../interfaces/Activity";

export async function insertActivity(activity: Activity) : Promise<string>{
    try {
        console.log("activity", activity)
        const mysqlConnection = await connect()
        const query : string="SELECT activity (activityId, activityCity, activityDescription, activityGroupName, activityStreet1, activityStreet2, activityTime, activityWebsite, activityZipCode) VALUES (UUID_TO_BIN(UUID()), :activityCity, :activityDescription, :activityGroupName, :activityStreet1, :activityStreet2, :activityTime, :activityWebsite, :activityZipCode)"
        const [rows] = await mysqlConnection.execute(query, activity)
        console.log("resultfrommysql",rows)
        return "activity successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}

// order by clause; order by proximity
// optionally specify a WHERE clause according to categories; if no category, omit the WHERE clause