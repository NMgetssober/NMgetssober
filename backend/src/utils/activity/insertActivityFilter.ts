import {connect} from "../database.utils";
import {ActivityFilter} from "../interfaces/ActivityFilter";

export async function insertActivityFilter(activityFilter: ActivityFilter) : Promise<string>{

    try {
        const mysqlConnection = await connect()

        const query : string="INSERT INTO activityFilter (activityFilterActivityId,activityFilterActivityTypeId) VALUES (UUID_TO_BIN(:activityFilterActivityId), UUID_TO_BIN(:activityFilterActivityTypeId))"


        const [rows] = await mysqlConnection.execute(query, activityFilter)

        return "activityfilter successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}