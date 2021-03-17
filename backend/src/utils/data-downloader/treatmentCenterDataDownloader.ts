//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {TreatmentCenter} from "../interfaces/TreatmentCenter";
import {ServiceProvided} from "../interfaces/ServiceProvided";
import {insertTreatmentCenter} from "../treatment-center/insertTreatmentCenter";
import {FacilityCategory} from "../interfaces/FacilityCategory";
import {insertFacilityCategory} from "../facility-category/insertFacilityCategory";
import {insertServiceProvided} from "../service-provided/insertServiceProvided";
import {v1 as uuid} from "uuid";
import {selectAllFacilityCategories} from "../facility-category/selectAllFacilityCategories";
const Geocodio = require('geocodio-library-node');


function treatmentCenterDataDownloader(): Promise<any> {
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

            // geocoding

            const geocoder = new Geocodio(process.env.GEOCODE_KEY)

            for (let currentTreatmentCenterCategory of treatmentCenterJson.categories) {
                const facilityCategory: FacilityCategory = {
                    facilityCategoryGroupName: "update later",
                    facilityCategoryId: uuid(),
                    facilityCategoryName: currentTreatmentCenterCategory,
                }
                await insertFacilityCategory(facilityCategory)
            }

            const facilityCategories = await selectAllFacilityCategories() ?? []

            for (let currentTreatmentCenter of treatmentCenterJson.data) {

                const address = currentTreatmentCenter.street1 + ',' + currentTreatmentCenter.street2 + ',' + currentTreatmentCenter.city + ',' + 'NM, ' + currentTreatmentCenter.zipCode;
                const response = await geocoder.geocode(address)

                const treatmentCenter: TreatmentCenter = {
                    treatmentCenterId: uuid(),
                    treatmentCenterName: currentTreatmentCenter.name,
                    treatmentCenterStreet1: currentTreatmentCenter.street1,
                    treatmentCenterStreet2: currentTreatmentCenter.street2,
                    treatmentCenterLat: response.results[0]['location']['lat'],
                    treatmentCenterLong: response.results[0]['location']['lng'],
                    treatmentCenterCity: currentTreatmentCenter.city,
                    treatmentCenterZipCode: currentTreatmentCenter.zipcode,
                    treatmentCenterPhone: currentTreatmentCenter.phone,
                    treatmentCenterWebsite: currentTreatmentCenter.website
                }

                await insertTreatmentCenter(treatmentCenter)

                // @ts-ignore mismatch
                for (let currentServiceProvided of facilityCategories) {

                    console.log(currentServiceProvided.facilityCategoryName)

                    if (currentServiceProvided.facilityCategoryName === "Detoxification" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "SAMHSA-certifiedOpioidTreatmentProgram" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "HospitalInpatient" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Residential" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Outpatient" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "NoPaymentAccepted" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "CashOrSelf-payment" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Medicaid" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Medicare" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "StateFinancedInsurance_OtherThanMedicaid" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "PrivateHealthInsurance" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "MilitaryInsurance" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Veterans" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "ActiveDutyMilitary" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "MilitaryFamilies" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "AdultWomen" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "AdultMen" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Female" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Male" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "LesbianGayBisexualTransgender(LGBT)" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Navajo" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                    if (currentServiceProvided.facilityCategoryName === "Spanish" && currentTreatmentCenter[currentServiceProvided.facilityCategoryName] === 1) {
                        await createServiceProvided(currentServiceProvided.facilityCategoryId, treatmentCenter.treatmentCenterId)
                        console.log(currentServiceProvided.facilityCategoryName)
                    }
                }
            }
        } catch
            (error) {
            throw new Error(error)
        }
    }

    async function createServiceProvided(facilityCategoryId: string, treatmentCenterId: string) {


        const serviceProvided: ServiceProvided = {
            serviceProvidedFacilityCategoryId: facilityCategoryId,
            serviceProvidedTreatmentCenterId: treatmentCenterId
        }
        await insertServiceProvided(serviceProvided)
    }
}

treatmentCenterDataDownloader().catch(error => {
    console.error(error)
})