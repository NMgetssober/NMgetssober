import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig";

const treatmentCenterSlice = createSlice({
    name: "treatmentCenter",
    initialState: [],
    reducers: {
        getAllTreatmentCenters: (treatmentCenters, action) => {
            return action.payload
        },
        getTreatmentCenterByTreatmentCenterId: (treatmentCenters, action) => {
            treatmentCenters.push(action.payload)
        },
        getTreatmentCenterByTreatmentCenterTypeIdOrderByZipCode: (treatmentCenters, action) => {
            return action.payload
        },
        getTreatmentCentersByTreatmentCenterTypeId: (treatmentCenters, action) => {
            return action.payload
        },
        getTreatmentCenterOrderByZipCode: (treatmentCenters, action) => {
            return action.payload
        }
    }
})

export const {getAllTreatmentCenters, getTreatmentCenterByTreatmentCenterId, getTreatmentCenterByTreatmentCenterTypeIdOrderByZipCode, getTreatmentCentersByTreatmentCenterTypeId, getTreatmentCenterOrderByZipCode} = treatmentCenterSlice.actions

export const fetchAllTreatmentCenters = () => async (dispatch) => {
    const {data} = await httpConfig.get("apis/treatment-center")
    dispatch(getAllTreatmentCenters(data))
}

export const fetchTreatmentCentersByTreatmentCenterId = (treatmentCenterId) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/treatmentCenter/${treatmentCenterId}`)
    dispatch(getTreatmentCenterByTreatmentCenterId(data))
}

export const fetchTreatmentCentersByTreatmentCenterTypeOrderByZipCode = (treatmentCenterTypeId, treatmentCenterZipCode) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/treatmentCenter/treatmentCenterTypeId/${treatmentCenterTypeId}/treatmentCenterZipCode/${treatmentCenterZipCode}`)
    dispatch(getTreatmentCenterByTreatmentCenterTypeIdOrderByZipCode(data))
}

export const fetchTreatmentCentersByTreatmentCenterTypeId = (treatmentCenterTypeId) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/treatmentCenter/treatmentCenterTypeId/${treatmentCenterTypeId}`)
    dispatch(getTreatmentCentersByTreatmentCenterTypeId(data))
}

export const fetchTreatmentCentersByZipCode = (treatmentCenterZipCode) => async (dispatch) => {
    const {data} = await httpConfig.get(`apis/treatmentCenter/treatmentCenterZipCode/${treatmentCenterZipCode}`)
    console.log(treatmentCenterZipCode)
    dispatch(getTreatmentCenterOrderByZipCode(data))
}

export default treatmentCenterSlice.reducer