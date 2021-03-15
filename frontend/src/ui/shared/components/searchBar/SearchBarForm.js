import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarFormContent} from "./SearchBarFormContent";

import {useDispatch, useSelector} from "react-redux";
import {fetchActivitiesByActivityTypeOrderByZipCode, fetchActivitiesByZipCode} from "../../../../store/activity";


export const SearchBarForm = () => {

    const searchBar = {
        activityType: "3eb2bd46-ef8f-44c2-b2b2-87e300cd6bc5",
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
        dispatch(fetchActivitiesByActivityTypeOrderByZipCode(values.activityType, values.activityZipCode))
    };

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