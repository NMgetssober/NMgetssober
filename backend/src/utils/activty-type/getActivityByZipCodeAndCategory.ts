import {connect} from "../database.utils";

export async function getActivityByZipCodeAndCategory(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('', {:activityZipCode});
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}

# getActivityByZipCodeAndCategory
SELECT activity.activityId,
    activity.activityCity,
    activity.activityGroupName,
    activity.activityLat,
    activity.activityLong,
    activity.activityStreet1,
    activity.activityStreet2,
    activityType.activityTypeId,
    activityType.activityTypeName
FROM activityFilter
INNER JOIN activity ON activityFilter.activityFilterActivityId = activity.activityId
INNER JOIN activityType ON activityFilter.activityFilterActivityTypeId = activityType.activityTypeId
WHERE activityZipCode = (:activityZipCode);