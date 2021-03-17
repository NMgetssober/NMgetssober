import {configureStore, combineReducers} from "@reduxjs/toolkit";
import activityType from "./activityType";
import activity from "./activity";
import treatmentCenter from "./treatmentCenter";
import facilityCategory from "./facilityCategory";


const reducer = combineReducers({activityType, activity, facilityCategory, treatmentCenter})

export const store = configureStore({reducer})

//you will have as many reducers for GET requests