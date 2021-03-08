import {connect} from "../database.utils";

export async function selectActivityByActivityId(activityId: string) {
    try {
        console.log('start')
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, CONVERT(activityDescription USING utf8) AS activityDescription, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, activity.activityTime, activity.activityWebsite, activity.activityZipCode FROM activity  WHERE activityId = UUID_TO_BIN(:activityId)', {activityId});
        console.log('rows', rows)
        // @ts-ignore mismatch w/ session in typescript
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}