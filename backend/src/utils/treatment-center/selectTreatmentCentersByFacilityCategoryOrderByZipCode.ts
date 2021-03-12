import {connect} from "../database.utils";

export async function selectTreatmentCentersByFacilityCategoryOrderByZipCode(facilityCategoryId: string) {
    try {
        console.log('start')
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenter.treatmentCenterCity, treatmentCenter.treatmentCenterName, treatmentCenter.treatmentCenterStreet1, treatmentCenter.treatmentCenterStreet2, BIN_TO_UUID(serviceProvidedFacilityCategoryId) AS facilityCategoryId, BIN_TO_UUID(servicePRovidedTreatmentCenterId) AS treatmentCenterId, treatmentCenterZipCode FROM serviceProvided INNER JOIN treatmentCenter ON serviceProvided.serviceProvidedTreatmentCenterId = treatmentCenter.treatmentCenterId  WHERE serviceProvided.serviceProvidedFacilityCategoryId = UUID_TO_BIN(:facilityCategoryId) ORDER BY treatmentCenterZipCode', {facilityCategoryId});
        // @ts-ignore mismatch w/ session in typescript
        console.log('rows', rows)
        return rows
    } catch(e) {
        console.error(e)
        return undefined
    }
}