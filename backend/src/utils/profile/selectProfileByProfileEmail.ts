import {connect} from "../database.utils";


export async function selectProfileByProfileEmail(profileEmail: string) {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileAuthenticationKey, profileEmail, profileUsername, profilePassword FROM profile WHERE profileEmail = :profileEmail', {profileEmail});
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}