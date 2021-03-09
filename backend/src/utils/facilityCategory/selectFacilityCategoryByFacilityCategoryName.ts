import {connect} from "../database.utils";

export async function selectFacilityCategoryByFacilityCategoryName(facilityCategoryName: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(facilityCategoryId) AS facilityCategoryId, facilityCategoryGroupName, facilityCategoryName FROM facilityCategory WHERE facilityCategoryName = :facilityCategoryName', {facilityCategoryName});

        await mysqlConnection.end()
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}