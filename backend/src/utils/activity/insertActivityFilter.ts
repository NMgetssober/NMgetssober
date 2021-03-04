import {connect} from "../database.utils";
import {Activity} from "../interfaces/Activity";
import {ActivityType} from "../interfaces/ActivityType";

export async function insertActivityFilter(activityType: ActivityType) : Promise<string>{
    try {
        console.log("activitytpye", activityType)
        const mysqlConnection = await connect()
        const query : string='SELECT activity.activityId, activity.activityCity, activity.activityDescription, activity.activityGroupName, activity.activityStreet1, activity.activityStreet2, activity.activityTime, activity.activityWebsite FROM activityFavorite INNER JOIN activity ON activity.activityId = activityFavorite.activityFavoriteActivityId WHERE activityFavoriteProfileId = UUID_TO_BIN(:profileId)', {profileId});'
        const [rows] = await mysqlConnection.execute(query, activityType)
        console.log("resultfrommysql",rows)
        return "activity successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}

// SELECT activityType.activityTypeId,
//        activityId

SELECT activity.activityCity, activity.activityDescription, activityGroupName, activityStreet1, activityStreet2, activityTime, activityWebsite, activityZipCode
FROM activityFilter
INNER JOIN activity
