//using this file to create data downloader
//axios is from the express spin up


import axios from "axios";
import {Profile} from "../interfaces/Profile";
import {insertProfile} from "../profile/insertProfile";

function dataDownloader () : Promise<any> {
    async function main() {
        try{
            await downloadUsers()
        } catch (error) {
            console.error(error)
        }

    }
    return main()

    async function downloadUsers() {
        try {
            const userRequest = await axios.get("http://jsonplaceholder.typicode.com/users")
            const users = userRequest.data
            for (let user of users) {
                const profile: Profile = {
                    profileId: null,
                    profileEmail: user.email,
                    profilePhone: user.phone,
                    profileUsername: user.username
                }
            await insertProfile(profile)
            }
        } catch (error) {
            throw new Error(error)
        }

    }
}

dataDownloader().catch(error => {
    console.error(error)
})