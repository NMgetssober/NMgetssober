import {FacilityCategory} from "../interfaces/FacilityCategory";
import {connect} from "../database.utils";


export async function insertFacilityCategory(facilitycategory: FacilityCategory): Promise<string> {
    try {

        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO facilityCategory (facilityCategoryId, facilityCategoryName, facilityCategoryGroupName) VALUES (UUID_TO_BIN(:facilityCategoryId), :facilityCategoryName, :facilityCategoryGroupName)"
        const [rows] = await mySqlConnection.execute(mySqlQuery, facilitycategory)

        await mySqlConnection.end()
        return "facility category successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}