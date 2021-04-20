import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig";


const facilityCategorySlice = createSlice({
    name: "facilityCategory",
    initialState: [],
    reducers: {
        getAllFacilityCategories: (facilityCategories, action) => {
            return action.payload
        },
    },
})

export const {getAllFacilityCategories} = facilityCategorySlice.actions

export const fetchAllFacilityCategories = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/facility-category");
    dispatch(getAllFacilityCategories(data));
};

export default facilityCategorySlice.reducer