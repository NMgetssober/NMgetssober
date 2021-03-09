//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {TreatmentCenter} from "../interfaces/Treatmentcenter";
import {insertTreatmentCenter} from "../treatmentCenter/insertTreatmentCenter";
import {FacilityCategory} from "../interfaces/FacilityCategory";
import {insertFacilityCategory} from "../facilityCategory/insertFacilityCategory";
import {selectTreatmentCentersByProfileId} from "../treatmentCenter/selectTreatmentCentersByProfileId";
import {insertServiceProvided} from "../serviceProvided/insertServiceProvided";
import {ServiceProvided} from "../interfaces/ServiceProvided";
import { v1 as uuid } from "uuid";


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

            for (let currentTreatmentCenterCategory of treatmentCenterJson.categories) {
                const facilityCategory: FacilityCategory = {
                    facilityCategoryGroupName: "update later",
                    facilityCategoryId: null,
                    facilityCategoryName: currentTreatmentCenterCategory,
                }
                await insertFacilityCategory(facilityCategory)
            }

            for (let currentTreatmentCenter of treatmentCenterJson.data) {
                const treatmentCenter: TreatmentCenter = {
                    treatmentCenterId: uuid(),
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

                let treatmentCenterId =

                const serviceProvided: ServiceProvided = {
                    serviceProvidedFacilityCategoryId: facilityCategoryId,
                    serviceProvidedTreatmentCenterId: treatmentCenterId
                }


               await insertServiceProvided(serviceProvided)

            }



        } catch
            (error) {
            throw new Error(error)
        }
    }

}



treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})