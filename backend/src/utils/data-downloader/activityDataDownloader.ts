import {activities} from "./activity";
import {Activity} from "../interfaces/Activity";
import {insertActivity} from "../activity/insertActivity";
import {ActivityType} from "../interfaces/ActivityType";
import {insertActivityFilter} from "../activity/insertActivityFilter";

function activityDataDownloader() : Promise<any> {
    async function main() {
        try{
            await getActivities()
        } catch (error) {
            console.error(error)
        }
    }

    return main()

    async function getActivities() {
        try{
            for (let currentActivity of activities) {
                const activity : Activity = {
                    activityId: null,
                    activityCity: currentActivity.city,
                    activityDescription: currentActivity.description,
                    activityGroupName: currentActivity.groupName,
                    activityStreet1: currentActivity.street1,
                    activityStreet2: currentActivity.street2,
                    activityTime: currentActivity.whenTheyMeet,
                    activityWebsite: currentActivity.link,
                    activityZipCode: currentActivity.zipCode
                }
                await insertActivity(activity)
                // if is (isFitness)
                //    await insertActivityFilter (activityId, activityTypeId)
                // if is (isWomenFocused)
                //    await insertActivityFilter (activityId, activityTypeId)
                // if is (isSobrietyRelated)
                //    await insertActivityFilter (activityId, activityTypeId)
                //todo check what activity types this activity has; create activity filter insertActivityFilter
                // const dict : ActivityType = {
                //     isFitness: activities.isFitness,
                //     isWomenFocused: activities.isWomenFocused,
                //     isSobrietyRelated:  activities.isSobrietyRelated
                // }
                // await insertActivityFilter(dict)
                // console.log(dict)

            }
        } catch (error) {
            throw new Error(error)
        }

    }
}

activityDataDownloader().catch(error => {
    console.error(error)
})