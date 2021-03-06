import {activities} from "./activity";
import {Activity} from "../interfaces/Activity";
import {insertActivity} from "../activity/insertActivity";
import {insertActivityFilter} from "../activity/insertActivityFilter";
import {v1 as uuidv1} from "uuid";
import {ActivityFilter} from "../interfaces/ActivityFilter";
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
                //geocoding
                //,
                // const geocoder = new Geocodio(process.env.GEOCODE_KEY);
                const activity : Activity = {
                    activityId: uuidv1(),
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

//grab activityID from activityobject & use it as an argument to create activity filter
//build out activityFilter object and pass to insertactivityfilter

                if (currentActivity.isFitness === 1) {
                    const activityFilter : ActivityFilter = {
                        activityFilterActivityId: activity.activityId,
                        activityFilterActivityTypeId: '7d33b74b-ebc1-4db4-8088-1e279630cbd5'
                    }
                    console.log(activityFilter)
                    await insertActivityFilter(activityFilter)
                }
                if (currentActivity.isWomenFocused  === 1) {
                    const activityFilter : ActivityFilter = {
                        activityFilterActivityId: activity.activityId,
                        activityFilterActivityTypeId: '3eb2bd46-ef8f-44c2-b2b2-87e300cd6bc5'
                    }
                    await insertActivityFilter(activityFilter)
                }
                if (currentActivity.isSobrietyRelated === 1) {
                    const activityFilter : ActivityFilter = {
                        activityFilterActivityId: activity.activityId,
                        activityFilterActivityTypeId: 'e07f978c-bbf0-44e5-b38c-c562d597fc83'
                    }
                    await insertActivityFilter(activityFilter)
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