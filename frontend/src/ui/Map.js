import React, {useState} from "react"
import ReactMapGL, {Popup} from "react-map-gl";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllActivities} from "../store/activity";
import {ActivityName} from "../activity-name";

export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
    }

    React.useEffect(initialEffects, [dispatch])

    const [viewport, setViewport] = React.useState({
        latitude: 35.15,
        longitude: -106.65,
        zoom: 9
    });
    const [popupInfo, setPopupInfo] = useState(null);
    // const {showResults} = props;

    return (
        <>
            <Container>
                <Row className="my-4">
                    <Col>

                        <Form inline className="my-3">
                            <FormControl type="text" placeholder="Please insert zip code" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>

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