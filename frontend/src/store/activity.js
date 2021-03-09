import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";

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

export const fetchAllActivities = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity");
    dispatch(getAllActivities(data));
};

export default activitySlice.reducer