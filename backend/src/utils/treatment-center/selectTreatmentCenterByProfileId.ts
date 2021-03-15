import {connect} from '../database.utils';

export async function selectTreatmentCenterByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite FROM treatmentFavorite INNER JOIN treatmentCenter ON treatmentCenterId = treatmentFavoriteTreatmentCenterId WHERE treatmentFavoriteProfileId = UUID_TO_BIN(:profileId)', {profileId});

        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}