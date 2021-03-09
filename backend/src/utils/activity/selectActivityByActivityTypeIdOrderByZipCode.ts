import {connect} from "../database.utils";

export async function selectActivityByActivityTypeIdOrderByZipCode(activityTypeId: string) {
        try {
            console.log('start')
            const mysqlConnection = await connect();
            const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, BIN_TO_UUID(activityFilterActivityTypeId) AS activityTypeId, BIN_TO_UUID(activityFilterActivityId) AS activityId, activityZipCode FROM activityFilter INNER JOIN activity ON activityFilter.activityFilterActivityId = activity.activityId WHERE activityFilter.activityFilterActivityTypeId = UUID_TO_BIN(:activityTypeId) ORDER BY activityZipCode', {activityTypeId});
            // @ts-ignore mismatch w/ session in typescript
            console.log('rows', rows)
            return rows
        } catch(e) {
            console.error(e)
            return undefined
        }
}