import {treatmentCenter} from "../interfaces/Treatmentcenter";
import {connect} from "../database.utils";


export async function insertTreatmentCenter(treatmentcenter: treatmentCenter): Promise<string> {
    try {
        console.log("treatmentCenter", treatmentcenter)
        const mysqlConnection = await connect()
        const query: string = "INSERT INTO treatmentCenter (treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterWebsite) VALUES (UUID_TO_BIN(UUID()), :treatmentCenterName, :treatmentCenterStreet1, :treatmentCenterStreet2, :treatmentCenterCity, :treatmentCenterZipCode, :treatmentCenterWebsite)"
        const [rows] = await mysqlConnection.execute(query, treatmentcenter)
        console.log("resultfrommysql", rows)
        return "treatmentcenter successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}