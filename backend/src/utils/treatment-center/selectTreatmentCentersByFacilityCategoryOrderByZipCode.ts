import {connect} from "../database.utils";


export async function selectTreatmentCentersByFacilityCategoryOrderByZipCode(treatmentCenterZipCode: string) {
    try {

        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterCity, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, BIN_TO_UUID(serviceProvidedFacilityCategoryId) AS facilityCategoryId, BIN_TO_UUID(servicePRovidedTreatmentCenterId) AS treatmentCenterId, treatmentCenterZipCode FROM serviceProvided INNER JOIN treatmentCenter ON serviceProvided.serviceProvidedTreatmentCenterId = treatmentCenterId  WHERE serviceProvidedFacilityCategoryId = UUID_TO_BIN(:facilityCategoryId) ORDER BY treatmentCenterZipCode'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {treatmentCenterZipCode})
       // @ts-ignore mismatch w/ session in typescript

        return rows;
    } catch(e) {
        console.error(e)
        return undefined
    }
}