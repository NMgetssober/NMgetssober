import {connect} from "../database.utils";

export async function selectActivityByActivityTypeIdOrderByZipCode(activityTypeId: string, userLat: number, userLng: number) {
        try {

            const mysqlConnection = await connect();

            if (activityTypeId) {

            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, activity.activityGroupName, activity.activityLat, activity.activityLong, activity.activityStreet1, activity.activityStreet2, BIN_TO_UUID(activityFilterActivityTypeId) AS activityTypeId, BIN_TO_UUID(activityFilterActivityId) AS activityId, activityZipCode FROM activityFilter INNER JOIN activity ON activityFilter.activityFilterActivityId = activity.activityId WHERE activityFilter.activityFilterActivityTypeId = UUID_TO_BIN(:activityTypeId) AND haversine(:userLng, :userLat, activity.activityLong, activity.activityLat) < 25 ORDER BY haversine(:userLng, :userLat, activity.activityLong, activity.activityLat)', {
                    userLng,
                    userLat,
                    activityTypeId
                });
            console.log('mysqlrows', rows)
                return rows
            } else {
            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(activityId) AS activityId, activity.activityCity, activity.activityGroupName, activity.activityLat, activity.activityLong, activity.activityStreet1, activity.activityStreet2, activityZipCode FROM activity WHERE haversine(:userLng, :userLat, activity.activityLong, activity.activityLat) <25 ORDER BY haversine(:userLng, :userLat, activityLong, activityLat)', {
                    userLng,
                    userLat
                });
            return rows

            }
        } catch(e) {
            console.error(e)
            return e.message
        }
}