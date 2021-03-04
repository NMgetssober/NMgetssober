import {connect} from "../database.utils";
import {Activity} from "../interfaces/Activity";
import {ActivityType} from "../interfaces/ActivityType";

export async function insertActivityFilter(activityType: ActivityType) : Promise<string>{
    try {
        console.log("activitytpye", activityType)
        const mysqlConnection = await connect()
        const query : string="INSERT INTO activity (activityId, activityCity, activityDescription, activityGroupName, activityStreet1, activityStreet2, activityTime, activityWebsite, activityZipCode) VALUES (UUID_TO_BIN(UUID()), :activityCity, :activityDescription, :activityGroupName, :activityStreet1, :activityStreet2, :activityTime, :activityWebsite, :activityZipCode)"
        const [rows] = await mysqlConnection.execute(query, activity)
        console.log("resultfrommysql",rows)
        return "activity successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}

// SELECT activityType.activityTypeId,
//        activityId
