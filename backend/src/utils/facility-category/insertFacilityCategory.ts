import {FacilityCategory} from "../interfaces/FacilityCategory";
import {connect} from "../database.utils";


export async function insertFacilityCategory(facilityCategory: FacilityCategory): Promise<string> {
    try {
        console.log("facility-category", facilityCategory)
        const mysqlConnection = await connect()
        const query: string = "INSERT INTO facilityCategory (facilityCategoryId, facilityCategoryName, facilityCategoryGroupName) VALUES (UUID_TO_BIN(UUID()), :facilityCategoryName, :facilityCategoryGroupName)"
        const [rows] = await mysqlConnection.execute(query, facilityCategory)

        await mysqlConnection.end()
        console.log("resultfrommysql", rows)
        return "facility category successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}