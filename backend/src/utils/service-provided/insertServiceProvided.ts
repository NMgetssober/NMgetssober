import {connect} from "../database.utils";
import {ServiceProvided} from "../interfaces/ServiceProvided";

export async function insertServiceProvided(serviceProvided: ServiceProvided) : Promise<string>{
    try {

        const mySqlConnection = await connect()
        const query : string="INSERT INTO serviceProvided (serviceProvidedFacilityCategoryId, serviceProvidedTreatmentCenterId) VALUES (UUID_TO_BIN(:serviceProvidedFacilityCategoryId), UUID_TO_BIN(:serviceProvidedTreatmentCenterId))"
        await mySqlConnection.execute(query, serviceProvided)
        await mySqlConnection.end()
        return "service provided successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}