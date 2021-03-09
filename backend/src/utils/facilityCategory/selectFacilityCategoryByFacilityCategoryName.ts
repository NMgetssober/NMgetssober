import {connect} from "../database.utils";

export async function selectFacilityCategoryByFacilityCategoryName(facilityCategoryName: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT facilityCategoryId, facilityCategoryName, facilityCategoryGroup FROM facilityCategory WHERE facilityCategoryName = : faclilityCategoryName', {facilityCategoryName});


        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}