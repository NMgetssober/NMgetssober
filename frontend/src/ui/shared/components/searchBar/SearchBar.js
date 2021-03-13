import React from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchActivitiesByActivityTypeOrderByZipCode} from "../../../../store/activity";

export const SearchBar = () => {
    const activity = useSelector((state) => state.activity ? state.activity : [])
    console.log("activities from Redux slice", activity)

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchActivitiesByActivityTypeOrderByZipCode())
    }

    React.useEffect(initialEffects, [dispatch])

    return(
        <>
            <Form inline className="my-3">
                <FormControl type="text" placeholder="Please insert zip code" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
            </Form>

        </>
    )}