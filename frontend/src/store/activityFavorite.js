import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig";

const activityFavoriteSlice = createSlice({
    name: "activityFavorite",
    initialState: [],
    reducers: {

        getActivityFavoritesByProfileId: (activityFavorites, action) => {
            return(action.payload)
        }

    }
})

export const {getActivityFavoritesByProfileId} = activityFavoriteSlice.actions

export const fetchActivityFavoritesByProfileId = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/activity-favorite/activityFavoritesByProfileId")
    dispatch(getActivityFavoritesByProfileId(data))
}


export default activityFavoriteSlice.reducer