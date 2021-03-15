import {TreatmentCenter} from '../interfaces/TreatmentCenter';
import {connect} from "../database.utils";


export async function insertTreatmentCenter(treatmentcenter: TreatmentCenter): Promise<string> {
    try {

        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO treatmentCenter (treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite) VALUES (UUID_TO_BIN(:treatmentCenterId), :treatmentCenterName, :treatmentCenterStreet1, :treatmentCenterStreet2, :treatmentCenterLat, :treatmentCenterLong, :treatmentCenterCity, :treatmentCenterZipCode, :treatmentCenterPhone, :treatmentCenterWebsite)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentcenter)

        await mySqlConnection.end()
        return "treatment center successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}