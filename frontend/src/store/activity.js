import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig";

const activitySlice = createSlice({
    name: "activity",
    initialState: [],
    reducers: {
        getAllActivities: (activities, action) => {
            return action.payload
        },
        getActivityByActivityId: (activities, action) => {
            return action.payload
        }
    }
})

export const {getAllActivities, getActivityByActivityId} = activitySlice.actions

export const fetchAllActivities = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity")
    dispatch(getAllActivities(data))
}

export const fetchAllActivitiesByActivityId = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity/${activityId}")
    dispatch(getActivityByActivityId(data))
}

export default activitySlice.reducer