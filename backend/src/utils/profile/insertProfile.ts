import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        const mysqlConnection = await connect()
        const query : string="INSERT into profile(profileId, profileAuthenticationKey, profileEmail, profileHash, profileUsername) VALUES (UUID_TO_BIN(UUID()), :profileAuthenticationKey, :profileEmail, :profileHash, :profileUsername)"
        const [rows] = await mysqlConnection.execute(query, profile)
        return "profile successfully inserted"
    } catch (error) {
        console.error(error.msg)
        return error.msg
    }

}