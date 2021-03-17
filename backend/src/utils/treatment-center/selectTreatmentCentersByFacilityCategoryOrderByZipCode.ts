import {connect} from "../database.utils";


export async function selectTreatmentCentersByFacilityCategoryOrderByZipCode(facilityCategoryId: string,  userLat: number, userLng: number) {
    try {

        const mysqlConnection = await connect();

        if (facilityCategoryId) {

        const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterCity, treatmentCenterLat, treatmentCenterLong, treatmentCenterName, treatmentCenterPhone, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterWebsite,  treatmentCenterZipCode  FROM serviceProvided INNER JOIN treatmentCenter ON serviceProvided.serviceProvidedTreatmentCenterId = treatmentCenterId WHERE haversine(:userLng, :userLat, treatmentCenterLong, treatmentCenterLat) <25 ORDER BY haversine(:userLng, :userLat, treatmentCenterLong, treatmentCenterLat)',
            {
            userLng,
            userLat,
            facilityCategoryId
        });
    console.log (rows)
            return rows
        } else {
            const[rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(treatmentCenterId) AS treatmentCenterId, treatmentCenterCity, treatmentCenterLat, treatmentCenterLong, treatmentCenterName, treatmentCenterPhone, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterWebsite, treatmentCenterZipCode FROM treatmentCenter WHERE haversine(:userLng, :userLat, treatmentCenterLong, treatmentCenterLat) <25 ORDER BY haversine(:userLng, :userLat, treatmentCenterLong, treatmentCenterLat)', {
                userLng,
                userLat
            });

            return rows
        }
    } catch(e) {
        console.error(e)
        return e.message
    }
}