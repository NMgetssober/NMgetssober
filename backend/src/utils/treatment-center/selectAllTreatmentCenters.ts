import {connect} from '../database.utils';

export async function selectAllTreatmentCenters() {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat,treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite FROM treatmentCenter');

        // @ts-ignore
        return rows;
    } catch (e) {
        console.error(e)
        return undefined
    }
}