//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {treatmentCenter} from "../interfaces/Treatmentcenter";
import {insertTreatmentCenter} from "../treatmentcenter/insertTreatmentCenter";

function treatmentcenterdatadownloader () : Promise<any> {
    async function main() {
        try{
            await gettreatmentcenter()
        } catch (error) {
            console.error(error)
        }

    }
    return main()

    async function gettreatmentcenter() {
        try {
            for (let currentTreatmentCenter of treatmentCenterJson){
                    const treatmentcenter : treatmentCenter = {
                    treatmentCenterId: null,
                    treatmentCenterName: currentTreatmentCenter.city,
                    treatmentCenterStreet1: currentTreatmentCenter.street1,
                    treatmentCenterStreet2: currentTreatmentCenter.street2,
                    treatmentCenterLat: 89.89,
                    treatmentCenterLong: 89.89,
                    treatmentCenterCity: currentTreatmentCenter.city,
                    treatmentCenterZipCode: currentTreatmentCenter.zipcode,
                    treatmentCenterPhone: currentTreatmentCenter.phone,
                    treatmentCenterWebsite: currentTreatmentCenter.website
                }
                await insertTreatmentCenter(treatmentcenter)


                for ()

                // for (each of the categories),
                    // check to see this treatment center has this available
                    // if so then
                            //check to see if this category has been inserted into the database; is not insert
                            // then insert  service with our current treatment id or into facility category


            }
        } catch (error) {
            throw new Error(error)
        }

    }
}

treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})