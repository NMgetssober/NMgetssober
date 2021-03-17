import {connect} from '../database.utils';

export async function selectTreatmentCenterByTreatmentCenterId(treatmentCenterId: string) {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode,treatmentCenterPhone, treatmentCenterWebsite FROM treatmentCenter WHERE treatmentCenterId = UUID_TO_BIN(:treatmentCenterId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {treatmentCenterId})
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}