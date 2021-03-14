import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarFormContent} from "./SearchBarFormContent";

import {useDispatch} from "react-redux";
import {fetchActivitiesByZipCode} from "../../../../store/activity";


export const SearchBarForm = () => {
    const searchBar = {
        activityZipCode: ""
    };
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        activityZipCode: Yup.number()
            .min(501, "Invalid zip code.")
            .max(99950, "Invalid zip code.")
            .required("Required.")
    });

    const submitSearchBar = (values, {resetForm, setStatus}) => {
        dispatch(fetchActivitiesByZipCode(values.activityZipCode))
    };

    // <button
    //     aria-label="Increment value"
    //     onClick={() => dispatch(fetchActivities?)}
    // >

    return (

        <Formik
            initialValues={searchBar}
            onSubmit={submitSearchBar}
            validationSchema={validator}
        >
            {SearchBarFormContent}
        </Formik>

    )
};