import React, {useState} from "react"
import ReactMapGL, {Popup} from "react-map-gl";
import {Col, Container, Row} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllActivities} from "../store/activity";
import {ActivityName} from "../activity-name";
import {fetchAllActivityType} from "../store/activityType";
import {SearchBarForm} from "./shared/components/searchBar/SearchBarForm";
import {fetchAllTreatmentCenters} from "../store/treatmentCenter";



export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity : [])
    const activityTypes = useSelector((state) => state.activityType ? state.activityType : [])
    const treatmentCenters = useSelector((state) => state.treatmentCenter ? state.treatmentCenter : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
        dispatch(fetchAllActivityType())
        dispatch(fetchAllTreatmentCenters())
    }

    React.useEffect(initialEffects, [dispatch])
    // console.log(activities)

    const [viewport, setViewport] = React.useState({
        latitude: 35.15,
        longitude: -106.65,
        zoom: 9
    });
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <>
            <Container>
                <Row className="my-4">
                    <Col md={6}>

                        <SearchBarForm activityTypes={activityTypes}  />

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

                            {treatmentCenters.map((treatmentCenter) =>
                            <Pin
                                treatmentCenter={treatmentCenter}
                                key={treatmentCenter.treatmentCenterId}
                                onClick={setPopupInfo}
                            />
                            )}

                            {popupInfo && (
                                <Popup
                                    tipSize={10}
                                    anchor="top"
                                    longitude={popupInfo.activityLong ?? popupInfo.treatmentCenterLong}
                                    latitude={popupInfo.activityLat ?? popupInfo.treatmentCenterLat}
                                    closeOnClick={false}
                                    onClose={setPopupInfo}
                                >
                                    <ActivityName activity={popupInfo}
                                                  // insertActivityResults={insertActivityResults}
                                    />
                                </Popup>
                            )}
                        </ReactMapGL>
                    </Col>
                    <Col md={6}>

                        {popupInfo && (
                            <>

                                <Container>
                                    <h1>Results</h1>
                                    <p className="my-2 font-weight-bold">{popupInfo.activityGroupName ?? popupInfo.treatmentCenterName}</p>
                                    {popupInfo.activityDescription ?
                                    <>
                                        <p className="my-0 font-weight-bold">Description:</p>
                                        <p>{popupInfo.activityDescription}</p>
                                    </>
                                    :""}
                                    <p className="my-0 font-weight-bold">Address:</p>
                                    <p className="my-0">{popupInfo.activityStreet1 ?? popupInfo.treatmentCenterStreet1}</p>
                                    <p>{popupInfo.activityStreet2 ?? popupInfo.treatmentCenterStreet2}</p>
                                    <p className="my-0 font-weight-bold">City:</p>
                                    <p>{popupInfo.activityCity ?? popupInfo.treatmentCenterCity}</p>
                                    <p className="my-0 font-weight-bold">Zip code:</p>
                                    <p>{popupInfo.activityZipCode ?? popupInfo.treatmentCenterZipCode}</p>
                                    {popupInfo.treatmentCenterPhone ?
                                    <>
                                        <p className="my-0 font-weight-bold">Phone Number:</p>
                                        <p>{popupInfo.treatmentCenterPhone}</p>
                                    </>
                                    :""}
                                    {popupInfo.activityTime ?
                                        <>
                                    <p className="my-0 font-weight-bold">When they meet:</p>
                                    <p>{popupInfo.activityTime}</p>
                                        </>
                                    : ""}
                                    <p className="my-0 font-weight-bold">Website:</p>
                                    <a href={popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}>{popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}</a>
                                </Container>


                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}