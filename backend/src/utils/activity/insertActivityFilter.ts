import {connect} from "../database.utils";
import {ActivityFilter} from "../interfaces/ActivityFilter";

export async function insertActivityFilter(activityFilter: ActivityFilter) : Promise<string>{

    try {
        const mysqlConnection = await connect()
        console.log('start')
        const query : string="INSERT INTO activityFilter (activityFilterActivityId,activityFilterActivityTypeId) VALUES (UUID_TO_BIN(:activityFilterActivityId), UUID_TO_BIN(:activityFilterActivityTypeId))"
        console.log('middle')

        const [rows] = await mysqlConnection.execute(query, activityFilter)
        console.log("resultfrommysql",rows)
        return "activityfilter successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}