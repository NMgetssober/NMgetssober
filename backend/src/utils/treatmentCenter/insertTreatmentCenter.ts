import {TreatmentCenter} from "../interfaces/Treatmentcenter";
import {connect} from "../database.utils";


export async function insertTreatmentCenter(treatmentcenter: TreatmentCenter): Promise<string> {
    try {
        console.log("treatmentCenter", treatmentcenter)
        const mysqlConnection = await connect()
        const query: string = "INSERT INTO treatmentCenter (treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite) VALUES (UUID_TO_BIN(:treatmentCenterId), :treatmentCenterName, :treatmentCenterStreet1, :treatmentCenterStreet2, :treatmentCenterLat, :treatmentCenterLong, :treatmentCenterCity, :treatmentCenterZipCode, :treatmentCenterPhone, :treatmentCenterWebsite)"
        const [rows] = await mysqlConnection.execute(query, treatmentcenter)
        console.log("resultfrommysql", rows)
        await mysqlConnection.end()
        return "treatment center successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}