import {connect} from "../database.utils";

export async function selectTreatmentCentersByTreatmentCentersId(serviceProvidedFacilityCategoryId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(serviceProvidedFacilityCategoryId) AS serviceProvidedFacilityCategoryId, serviceProvidedTreatmentCenterId FROM serviceProvided  WHERE serviceProvidedFacilityCategoryId = UUID_TO_BIN(:serviceProvidedFacilityCategoryId)', {serviceProvidedFacilityCategoryId});

        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}