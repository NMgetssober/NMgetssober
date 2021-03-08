//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {TreatmentCenter} from "../interfaces/Treatmentcenter";
import {insertTreatmentCenter} from "../treatmentCenter/insertTreatmentCenter";
import {FacilityCategory} from "../interfaces/FacilityCategory";
import {insertFacilityCategory} from "../facilityCategory/insertFacilityCategory";


function treatmentcenterdatadownloader(): Promise<any> {
    async function main() {
        try {
            await getTreatmentCenter()
        } catch (error) {
            console.error(error)
        }

    }

    return main()

    async function getTreatmentCenter() {
        try {
            for (let currentTreatmentCenter of treatmentCenterJson.data) {
                const treatmentCenter: TreatmentCenter = {
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
                await insertTreatmentCenter(treatmentCenter)

            }
            for (let currentTreatmentCenterCategory of treatmentCenterJson.categories) {
                const facilityCategory: FacilityCategory = {
                    facilityCategoryGroupName: "update later",
                    facilityCategoryId: null,
                    facilityCategoryName: currentTreatmentCenterCategory,
                }
                await insertFacilityCategory(facilityCategory)
            }


        } catch
            (error) {
            throw new Error(error)
        }
    }

}

//notes from paul
// for (each of the categories),
// check to see this treatment center has this available
// if so then
// then insert  service with our current treatment id or into facility category


// if (treatmentCenterJson.categories.detoxification === 1)
//     return (TreatmentCenter.treatmentCenterId ++1)
//
//
//
//
//
//
// //Select category by category name (Like 35)
// onselect("facilityCategoryGroupName")
//
//
//
// //create insert service provided(weak entity)
//     insertServiceProvided()
//
//
//
//     }
//     catch (error) {
//         throw new Error(error)
//     }
//  }


treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})