import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function selectProfileByProfileAuthenticationKey(profileActivationToken: string) {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId,profileAuthenticationKey, profile Email, profileUsername, profilePassword FROM profile WHERE profileAuthenticationKey = :profileAuthenticationKey', {profileAuthenticationKey});
        console.log(rows)
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}