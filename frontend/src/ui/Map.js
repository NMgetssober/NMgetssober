import React, {useState} from "react"
import ReactMapGL, {Popup} from "react-map-gl";
import {Container} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllActivities, fetchAllActivitiesByActivityId} from "../store/activity";
import {ActivityName} from "../activity-name";


export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity :[])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
    }

    React.useEffect(initialEffects, [dispatch])

    const [viewport, setViewport] = React.useState({
        latitude: 35.33,
        longitude: -106.65,
        zoom: 9
    });
    const [popupInfo, setPopupInfo] = useState(null);


    return (
        <>
            <h1>Map Page</h1>
            <Container>

                <ReactMapGL
                    {...viewport}
                    width="50vw"
                    height="50vh"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                >

                    {activities.map((activity, index) =>
                        <Pin
                            activity = {activity}
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
                            <ActivityName activity={popupInfo} />
                        </Popup>
                    )}
                </ReactMapGL>

            </Container>
        </>
    )
}