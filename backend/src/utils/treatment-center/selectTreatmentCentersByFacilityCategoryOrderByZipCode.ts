import {connect} from "../database.utils";


export async function selectTreatmentCentersByFacilityCategoryOrderByZipCode(facilityCategoryId: string, resultElementElement: number, resultElementElement1: number) {
    try {

        const mysqlConnection = await connect();

        if (facilityCategoryId) {

        const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterCity, treatmentCenterLat, treatmentCenterLong, treatmentCenterName, treatmentCenterPhone, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterWebsite, BIN_TO_UUID(serviceProvidedTreatmentCenterId) AS facilityCategoryId, BIN_TO_UUID(serviceProvidedFacilityCategoryId) AS treatmentCenterId, treatmentCenterZipCode FROM serviceProvided INNER JOIN treatmentCenter ON serviceProvidedFacilityCategoryId = treatmentCenterId WHERE serviceProvided.serviceProvidedTreatmentCenterId = UUID_TO_BIN(:activityTypeId)')

            return rows
        } else {
            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterCity, treatmentCenterLat, treatmentCenterLong, treatmentCenterName, treatmentCenterPhone, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterWebsite, treatmentCenterZipCode FROM treatmentCenter')

            return rows
        }
    } catch(e) {
        console.error(e)
        return e.message
    }
}