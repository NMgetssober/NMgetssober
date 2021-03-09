import {connect} from "../database.utils";

export async function selectTreatmentCenterByTreatmentCenterId(treatmentCenterId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT treatmentCenter.treatmentCenterId, treatmentCenter.treatmentCenterName, treatmentCenter.treatmentCenterStreet1, treatmentCenter.treatmentCenterStreet2, treatmentCenter.treatmentCenterLat, treatmentCenter.treatmentCenterLong, treatmentCenter.treatmentCenterCity, treatmentCenter.treatmentCenterZipCode, treatmentCenter.treatmentCenterPhone, treatmentCenter.treatmentCenterWebsite FROM treatmentCenter WHERE treatmentCenterId = UUID_TO_BIN(:treatmentCenterId)', {treatmentCenterId});


        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}