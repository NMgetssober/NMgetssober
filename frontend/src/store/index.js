import  activityType from "./activityType";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const reducer = combineReducers({activityType})
export const store = configureStore({reducer})

//you will have as many reducers for GET requests