import {connect} from "../database.utils";

export async function selectActivityTypeByActivityTypeId(activityTypeId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityTypeId) AS activityTypeId, activityTypeName FROM activityType  WHERE activityTypeId = UUID_TO_BIN(:activityTypeId)', {activityTypeId});
        // @ts-ignore mismatch w/ session in typescript
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}