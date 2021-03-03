import {connect} from "../database.utils";

export async function selectPartialProfileByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileUsername FROM profile WHERE profileId = UUID_TO_BIN(:profileId)', {profileId});
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}