import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig";

const activityTypeSlice = createSlice({
    name: "activityType",
    initialState: [],
    reducers: {
        getAllActivityType: (activityType, action) => {
            return action.payload
        },
    },
})

export const {getAllActivityType} = activityTypeSlice.actions

export const fetchAllActivityType = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity-type");
    dispatch(getAllActivityType(data));
};

export default activityTypeSlice.reducer