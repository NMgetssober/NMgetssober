//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {TreatmentCenter} from "../interfaces/Treatmentcenter";
import {insertTreatmentCenter} from "../treatmentcenter/insertTreatmentCenter";
import {TreatmentCenterCategory} from "../interfaces/TreatmentCenterCategory";

function treatmentcenterdatadownloader () : Promise<any> {
    async function main() {
        try{
            await createcategories()
            await gettreatmentcenter()
        } catch (error) {
            console.error(error)
        }

    }
    return main()

    async function gettreatmentcenter() {
        try {
            for (let currentTreatmentCenter of treatmentCenterJson.data) {
                const treatmentcenter: TreatmentCenter = {
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

            }
            //notes from paul
            // for (each of the categories),
            // check to see this treatment center has this available
            // if so then
           // then insert  service with our current treatment id or into facility category




            // if (currentTreatmentCenter.Detoxification === 1) {



            //Select category by category name (Like 35)



            //create insert service provided(weak enitity)
            // }
        }
        catch (error) {
            throw new Error(error)
        }


    }




            async function createcategories() {
                try {
                    for (let currentTreatmentCenterCategory of treatmentCenterJson.categories){
                         const category : TreatmentCenterCategory = {
                             facilityCategoryGroupName: "update later",
                             facilityCategoryId: null,
                             facilityCategoryName: currentTreatmentCenterCategory,

                            }
                        // Insert Category
                //     }
                //     await insertTreatmentCenter(treatmentcenter)----example
                //
                // }
                        }
                    }



                catch (error) {
                    throw new Error(error)
                }





    }
}

treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})