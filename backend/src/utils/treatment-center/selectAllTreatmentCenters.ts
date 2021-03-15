import {connect} from '../database.utils';

export async function selectAllTreatmentCenters() {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat,treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite FROM treatmentCenter'
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        // @ts-ignore
        return rows;
    } catch (e) {
        console.error(e)
        return undefined
    }
}