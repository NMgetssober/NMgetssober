import {connect} from "../database.utils";
import {FacilityCategory} from "../interfaces/FacilityCategory";

export async function selectAllFacilityCategories() {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(facilityCategoryId) AS facilityCategoryId, facilityCategoryGroupName, facilityCategoryName FROM facilityCategory'
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        // @ts-ignore
        return [...rows];
    } catch (e) {
        console.error(e)
        return undefined
    }
}