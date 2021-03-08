import {ServiceProvided} from "../interfaces/ServiceProvided";
import {connect} from "../database.utils";


export async function insertServiceProvided(serviceprovided: ServiceProvided): Promise<string> {
    try {
        console.log("ServiceProvided", serviceprovided)
        const mysqlConnection = await connect()
        const query: string = "INSERT INTO ServiceProvided (serviceProvidedFacilityCodeCategoryId, serviceProvidedTreatmentCenterId) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(UUID())"
        const [rows] = await mysqlConnection.execute(query, serviceprovided)
        console.log("resultfrommysql", rows)
        return "service provided successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}