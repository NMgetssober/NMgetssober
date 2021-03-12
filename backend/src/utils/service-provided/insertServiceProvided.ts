import {connect} from "../database.utils";
import {ServiceProvided} from "../interfaces/ServiceProvided";

export async function insertServiceProvided(serviceProvided: ServiceProvided) : Promise<string>{
    try {

        const mysqlConnection = await connect()
        const query : string="INSERT INTO serviceProvided (serviceProvidedFacilityCategoryId, serviceProvidedTreatmentCenterId) VALUES (UUID_TO_BIN(:serviceProvidedFacilityCategoryId), UUID_TO_BIN(:serviceProvidedTreatmentCenterId))"
        await mysqlConnection.execute(query, serviceProvided)
        await mysqlConnection.end()
        return "service provided successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}