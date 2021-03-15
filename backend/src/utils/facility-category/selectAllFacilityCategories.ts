import {connect} from "../database.utils";

export async function selectAllFacilityCategories() {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(facilityCategoryId) AS facilityCategoryId, facilityCategoryGroupName, facilityCategoryName FROM facilityCategory');

        // @ts-ignore
        return rows;
    } catch (e) {
        console.error(e)
        return undefined
    }
}