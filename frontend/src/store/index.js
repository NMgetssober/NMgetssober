import {configureStore, combineReducers} from "@reduxjs/toolkit";
import activityType from "./activityType";
import activity from "./activity";

const reducer = combineReducers({activityType, activity})

export const store = configureStore({reducer})

//you will have as many reducers for GET requests