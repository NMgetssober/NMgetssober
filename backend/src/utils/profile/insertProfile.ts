import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        console.log("profile", profile)
        const mysqlConnection = await connect()
        const query : string="INSERT into profile(profileId, profileAuthenticationKey, profileEmail, profilePassword, profileUsername) VALUES (UUID_TO_BIN(UUID()), :profileAuthenticationKey, :profileEmail, :profilePassword, :profileUsername)"
        const [rows] = await mysqlConnection.execute(query, profile)
        console.log("resultfrommysql",rows)
        return "profile successfully inserted"
    } catch (error) {
        console.error(error)
        return error.msg
    }

}