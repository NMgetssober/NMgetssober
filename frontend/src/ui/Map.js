import React, {useState} from "react"
import ReactMapGL, {Popup} from "react-map-gl";
import {Col, Container, Row} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchActivitiesByZipCode, fetchAllActivities} from "../store/activity";
import {ActivityName} from "../activity-name";
import {fetchAllActivityType} from "../store/activityType";
import {SearchBarForm} from "./shared/components/searchBar/SearchBarForm";

export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity : [])
    const activityTypes = useSelector((state) => state.activityType ? state.activityType : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
        dispatch(fetchAllActivityType())
        dispatch(fetchActivitiesByZipCode())
    }

    React.useEffect(initialEffects, [dispatch])
    console.log(activityTypes)

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
                    <SearchBarForm/>


                                {/*{activityTypes.map((activityType, index) => <option value="activityType.activityTypeId" key={index}>{activityType.activityTypeName}</option> )}*/}


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