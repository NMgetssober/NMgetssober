import React, {useState} from "react"
import ReactMapGL, {Popup} from "react-map-gl";
import {Button, Col, Container, FormControl, Row, Form} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchActivitiesByZipCode, fetchAllActivities} from "../store/activity";
import {ActivityName} from "../activity-name";
import {fetchAllActivityType} from "../store/activityType";
import {SearchBarForm} from "./shared/components/searchBar/SearchBarForm";
// import {Form} from "formik";

export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity : [])
    const activityTypes = useSelector((state) => state.activityType ? state.activityType : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
        dispatch(fetchAllActivityType())
        // dispatch(fetchActivitiesByZipCode('88001'))
    }

    React.useEffect(initialEffects, [dispatch])
    // console.log(activities)

    const [viewport, setViewport] = React.useState({
        latitude: 35.15,
        longitude: -106.65,
        zoom: 9
    });
    const [popupInfo, setPopupInfo] = useState(null);
    // const {showResults} = props;

    //const [map, setMap] = useState(null);
    // <button onClick={() => setMap(count + 1)}>
    //     Click me
    // </button>

    return (
        <>
            <Container>
                <Row className="my-4">
                    <Col>
                    {/*<SearchBarForm/>*/}

                        {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
                        {/*    <Form.Label>Example select</Form.Label>*/}
                        {/*    <Form.Control as="select">*/}
                        {/*    {activityTypes.map((activityType, index) => <option value="activityType.activityTypeId" key={index}>{activityType.activityTypeName}</option> )}*/}
                        {/*    </Form.Control>*/}
                        {/*</Form.Group>*/}
                        {/*</Form>*/}

                        <Form className="my-3">
                            <Form.Label>Activity</Form.Label>
                            <Form.Control as="select">
                                {activityTypes.map((activityType, index) => <option value="activityType.activityTypeId" key={index}>{activityType.activityTypeName}</option> )}
                            </Form.Control>
                            <FormControl type="text" placeholder="Please insert zip code" className="mr-sm-2"/>
                            <Button variant="outline-success" type={"searchBar"}>Search</Button>
                        </Form>
                        {/*SearchBarForm*/}


                        <ReactMapGL
                            {...viewport}
                            width="50vw"
                            height="50vh"
                            onViewportChange={(viewport) => setViewport(viewport)}
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                        >

                            {activities.map((activity, index) =>
                                <Pin
                                    activity={activity}
                                    index={index} key={index}
                                    onClick={setPopupInfo}
                                />
                            )}

                            {popupInfo && (
                                <Popup
                                    tipSize={5}
                                    anchor="top"
                                    longitude={popupInfo.activityLong}
                                    latitude={popupInfo.activityLat}
                                    closeOnClick={false}
                                    onClose={setPopupInfo}
                                >
                                    <ActivityName activity={popupInfo}/>
                                </Popup>
                            )}
                        </ReactMapGL>
                    </Col>
                    <Col>
                        <h1>Results</h1>

                    </Col>
                </Row>
            </Container>
        </>
    )
}