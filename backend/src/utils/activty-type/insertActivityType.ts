import {connect} from "../database.utils";
import {ActivityType} from "../interfaces/ActivityType";

export async function insertActivityType(activityType: ActivityType) : Promise<string>{
    try {

        const mysqlConnection = await connect()
        const query : string="INSERT INTO activityType (activityTypeId, activityTypeName) VALUES (UUID_TO_BIN(:activityTypeId), :activityTypeName)"
        const [rows] = await mysqlConnection.execute(query, activityType)

        return "activitytype successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}