import {connect} from '../database.utils';

export async function selectTreatmentCenterByProfileId(profileId: string) {
    try {
        const mySqlConnection = await connect();

        const mySqlQuery = 'SELECT treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite FROM treatmentFavorite INNER JOIN treatmentCenter ON treatmentCenterId = treatmentFavoriteTreatmentCenterId WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:profileId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}