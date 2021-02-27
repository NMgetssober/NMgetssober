import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";

export async function updateProfile(profile: Profile) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileAuthenticationKey = :profileAuthenticationKey, profileUsername = :profileUsername, profileEmail = :profileEmail, profilePassword = :profilePassword WHERE profileId = UUID_TO_BIN(:profileID)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}