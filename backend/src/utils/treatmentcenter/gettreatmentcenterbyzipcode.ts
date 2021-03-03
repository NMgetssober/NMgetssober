import {treatmentcenterfinal} from "../database/treatmentcenterfinal"
import {connect} from "../database.utils";

export async function insertTreatmentcenter(gettreatmentcenterbyzipcode: treatmentcenterfinal) {

    try {
        const mySqlConnetion = await connect()
        const mySqlQuery = "INSERT INTO treatmentcenter(treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterCity, treatmentCenterZipCode,treatmentCenterPhoneNumber,treatmentCenterWebsite) VALUES(UUID_TO_BIN(UUID()), ) "

        const [rows] = await mySqlConnetion.execute(mySqlQuery, treatmentcenterfinal)
        return "________"

    } catch (error) {
        console.log(error)
    }
}

//
//
// import {Tweet} from "../interfaces/Tweet";
// import {connect} from "../database.utils";
//
// export async function insertTweet(tweet: Tweet) {
//     try {
//         const mySqlConnection = await connect()
//         const mySqlQuery = "INSERT INTO tweet(tweetId, tweetProfileId, tweetContent, tweetDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:tweetProfileId), :tweetContent, NOW())";
//
//         const [rows] = await mySqlConnection.execute(mySqlQuery, tweet)
//         return "Tweet created successfully"
//     } catch (error) {
//         console.log(error)
//     }
// }