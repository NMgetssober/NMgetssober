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
            activities.push(action.payload)
        },
        getActivityByActivityTypeIdOrderByZipCode: (activities, action) => {
            activities.push(action.payload)
        },
        getActivitiesByActivityTypeId: (activities, action) => {
            return action.payload
        },
        getActivityOrderByZipCode: (activities, action) => {
            return action.payload
        }
        }
    })

export const {getAllActivities, getActivityByActivityId, getActivityByActivityTypeIdOrderByZipCode, getActivitiesByActivityTypeId, getActivityOrderByZipCode} = activitySlice.actions

export const fetchAllActivities = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity")
    dispatch(getAllActivities(data))
}

export const fetchActivitiesByActivityId = (activityId) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/activity/${activityId}`)
    dispatch(getActivityByActivityId(data))
}

export const fetchActivitiesByActivityTypeOrderByZipCode = (activityTypeId, activityZipCode) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/activity/activityTypeId/${activityTypeId}/activityZipCode/${activityZipCode}`)
    dispatch(getActivityByActivityTypeIdOrderByZipCode(data))
}

export const fetchActivitiesByActivityTypeId = (activityTypeId) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/activity/activityTypeId/${activityTypeId}`)
    dispatch(getActivitiesByActivityTypeId(data))
}

export const fetchActivitiesByZipCode = (activityZipCode) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/activity/activityZipCode/${activityZipCode}`)
    console.log(activityZipCode)
    dispatch(getActivityOrderByZipCode(data))
}

export default activitySlice.reducer