import {connect} from "../database.utils";

export async function selectFacilityCategoryByFacilityCategoryName(facilityCategoryName : string) {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(facilityCategoryId) AS facilityCategoryId, facilityCategoryGroupName, facilityCategoryName FROM facilityCategory WHERE facilityCategoryName = :facilityCategoryName'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {facilityCategoryName})
        // @ts-ignore
        await mySqlConnection.end()
        // @ts-ignore
        return rows [0];
    } catch (e) {
        console.error(e)
        return undefined
    }
}