import {connect} from "../database.utils";

export async function selectTreatmentCentersByTreatmentCentersId(activityId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT treatmentCenter.treatmentCenterId, treatmentCenter.treatmentCenterName, treatmentCenter.treatmentCenterStreet1, treatmentCenter.treatmentCenterStreet2, treatmentCenter.treatmentCenterLat, treatmentCenter.treatmentCenterLong, treatmentCenter.treatmentCenterCity, treatmentCenter.treatmentCenterZipCode, treatmentCenter.treatmentCenterPhone, treatmentCenter.treatmentCenterWebsite FROM treatmentcenter WHERE treatmentCenterId = UUID_TO_BIN(:treatmentCenterId)', {treatmentCenterId});


        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}