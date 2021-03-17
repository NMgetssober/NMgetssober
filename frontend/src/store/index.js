import {configureStore, combineReducers} from "@reduxjs/toolkit";
import activityType from "./activityType";
import activity from "./activity";
import treatmentCenter from "./treatmentCenter";
import facilityCategory from "./facilityCategory";
import activityFavorite from "./activityFavorite";


const reducer = combineReducers({activityType,activityFavorite, activity, facilityCategory, treatmentCenter})

export const store = configureStore({reducer})

//you will have as many reducers for GET requests