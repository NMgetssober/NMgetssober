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
                    activityLat: 89.89,
                    activityLong: 89.89,
                    activityTime: currentActivity.whenTheyMeet,
                    activityWebsite: currentActivity.link,
                    activityZipCode: currentActivity.zipCode
                }
                await insertActivity(activity)

                if (activities.isFitness === 1) {
                    await insertActivityFilter(activityId, '7d33b74b-ebc1-4db4-8088-1e279630cbd5')
                }
                if (activities.isWomenFocused === 1) {
                    await insertActivityFilter(activityId, '3eb2bd46-ef8f-44c2-b2b2-87e300cd6bc5')
                }
                if (activities.isSobrietyRelated === 1) {
                    await insertActivityFilter(activityId, 'e07f978c-bbf0-44e5-b38c-c562d597fc83')
                }

            }
        } catch (error) {
            throw new Error(error)
        }

    }
}

activityDataDownloader().catch(error => {
    console.error(error)
})