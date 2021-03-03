//using this file to create data downloader
//axios is from the express spin up




import {treatmentCenterFinal} from "../database/treatmentcenterfinal"

function treatmentcenterdatadownloader () : Promise<any> {
    async function main() {
        try{
            await downtreatmentcenter()
        } catch (error) {
            console.error(error)
        }

    }
    return main()

    async function downtreatmentcenter() {
        try {
            console.log(treatmentCenterFinal)
 // loop over
 //            for loop

        } catch (error) {
            throw new Error(error)
        }

    }
}

// create objects


treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})