import React from "react";
import {Col, Row, Container} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllActivityType} from "../store/activityType";

export const ActivityTypeComponent = () => {

    const activityType = useSelector((state) => state.activityType ? state.activityType : [])
    console.log("activities from Redux slice", activityType)

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivityType())
    }

    React.useEffect(initialEffects, [dispatch])

    return (
        <>
            <main className="my-5">
                <Container fluid className="text-center">
                    <Row className="mb-3">
                        <Col>Activities</Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}