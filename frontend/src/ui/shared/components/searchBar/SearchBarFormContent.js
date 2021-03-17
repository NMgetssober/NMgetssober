import React from "react";
import {FormDebugger} from "../../utils/FormDebugger";
import {Field} from "formik";
import {useSelector} from "react-redux";

export const SearchBarFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    const activityTypes = useSelector((state) => state.activityType ? state.activityType : [])
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}

                <div className="form-group">
                    <label htmlFor="activityType">Activity Type</label>
                    <div className="input-group">

                        <Field as="select" name="activityType" >
                            {activityTypes.map((activityType, index) => <option value={activityType.activityTypeId} key={index}>{activityType.activityTypeName}</option> )}
                        </Field>

                        {/*<input*/}
                        {/*    className="form-control"*/}
                        {/*    name="activityType"*/}
                        {/*    type="select"*/}
                        {/*    value={values.activityType}*/}
                        {/*    placeholder="Select an activity type."*/}
                        {/*    onChange={handleChange}*/}
                        {/*    onBlur={handleBlur}*/}

                        {/*/>*/}
                    </div>
                    {/*{*/}
                    {/*    errors.activityType && touched.activityType && (*/}
                    {/*        <div className="alert alert-danger">*/}
                    {/*            {errors.activityType}*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>

                <div className="form-group">
                    <label htmlFor="activityZipCode">Zip Code</label>
                    <div className="input-group">
                        {/*<div className="input-group-prepend">*/}
                        {/*    <div className="input-group-text">*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <input
                            className="form-control"
                            name="activityZipCode"
                            type="text"
                            value={values.activityZipCode}
                            placeholder="Enter zip code"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        <button className="btn btn-primary mb-2 ml-2" type="submit">Submit</button>
                    </div>
                    {
                        errors.activityZipCode && touched.activityZipCode && (
                            <div className="alert alert-danger">
                                {errors.activityZipCode}
                            </div>
                        )
                    }
                </div>

                {/*<FormDebugger {...props} />*/}
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}