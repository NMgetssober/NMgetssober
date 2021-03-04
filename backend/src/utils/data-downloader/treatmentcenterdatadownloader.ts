//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterFinal} from "../database/treatmentcenterfinal"
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
            for (let currentTreatmentCenter of treatmentCenterFinal){
                    const treatmentcenter : treatmentCenter = {
                    treatmentCenterId: null,
                    treatmentCenterName: currentTreatmentCenter.city,
                    treatmentCenterStreet1: currentTreatmentCenter.street1,
                    treatmentCenterStreet2: currentTreatmentCenter.street2,
                    treatmentCenterCity: currentTreatmentCenter.city,
                    treatmentCenterZipCode: currentTreatmentCenter.zipcode,
                    treatmentCenterWebsite: currentTreatmentCenter.website
                }
                await insertTreatmentCenter(treatmentcenter)
                // console.log(treatmentcenter)
            }
        } catch (error) {
            throw new Error(error)
        }

    }
}

treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})