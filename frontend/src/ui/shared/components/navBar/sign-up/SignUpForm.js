import React from 'react';
import {httpConfig} from "../../../utils/httpConfig";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";

export const SignUpForm = () => {
    const signUp = {
        profileEmail: "",
        profileUsername: "",
        profilePassword: "",
        profilePasswordConfirm: "",
    };

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("Please enter a valid email")
            .required('Email is required'),
        profileUsername: Yup.string()
            .required('Please enter a username'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password confirm is required")
            .min(8, "Password must be at least eight characters"),
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};