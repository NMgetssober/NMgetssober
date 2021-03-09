import  activities from "./activity";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const reducer = combineReducers({activities})
export const store = configureStore({reducer})