import {connect} from "../database.utils";
import {TreatmentCenter} from "../interfaces/Treatmentcenter";

export async function insertTreatmentCenter(treatmentcenter: TreatmentCenter) : Promise<string>{
    try {
        console.log("treatmentCenter", treatmentcenter)
        const mysqlConnection = await connect()
        const query : string="SELECT treatmentCenter (treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterLat, treatmentCenterLong, treatmentCenterCity, treatmentCenterZipCode, treatmentCenterPhone, treatmentCenterWebsite) VALUES (UUID_TO_BIN(UUID()), :treatmentCenterName, :treatmentCenterStreet1, :treatmentCenterStreet2, :treatmentCenterLat, :treatmentCenterLong, :treatmentCenterCity, :treatmentCenterZipCode, :treatmentCenterPhone, :treatmentCenterWebsite)"
        const [rows] = await mysqlConnection.execute(query, treatmentcenter)
        console.log("resultfrommysql",rows)
        return "Treatment Center successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}

