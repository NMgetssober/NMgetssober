import {connect} from "../database.utils";

export async function selectActivityByActivityTypeIdOrderByZipCode(activityTypeId: string, userLat: number, userLng: number) {
        try {

            const mysqlConnection = await connect();

            if (activityTypeId) {

            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, BIN_TO_UUID(activityFilterActivityTypeId) AS activityTypeId, BIN_TO_UUID(activityFilterActivityId) AS activityId, activityZipCode FROM activityFilter INNER JOIN activity ON activityFilter.activityFilterActivityId = activity.activityId WHERE activityFilter.activityFilterActivityTypeId = UUID_TO_BIN(:activityTypeId) ORDER BY haversine(:userLng, :userLat, activityLong, activityLat) < 25', {
                    userLng,
                    userLat,
                    activityTypeId
                });
                return rows
            } else {
            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, activityZipCode FROM activity ORDER BY haversine(:userLng, :userLat, activityLong, activityLat) limit 1', {
                    userLng,
                    userLat
                });
                console.log('zipCoderows', rows)
            return rows

            }
        } catch(e) {
            console.error(e)
            return e.message
        }
}