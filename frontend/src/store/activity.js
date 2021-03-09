import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../"
const activitySlice = createSlice({
    name: "activity",
    initialState: [],
    reducers: {
        getAllActivities: (activities, action) => {
            return action.payload
        },
    },
})

export const {getAllActivities} = activitySlice.actions

export default activitySlice.reducer