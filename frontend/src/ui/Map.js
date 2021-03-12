import React from "react"
import ReactMapGL from 'react-map-gl';
import {Container} from "react-bootstrap";
import {Pin} from "./Pin";


export const MapPage = () => {

    const [points, setPoints] = React.useState([
        {lat: 35.332, lng: -106.652},
        {lat: 35.339, lng: -106.656},
        {lat: 35.40, lng: -106.666},
        {lat: 35.23, lng: -106.4444}
    ]);
    // center={[-106.65, 35.33]}

    const [viewport, setViewport] = React.useState({
        latitude: 35.33,
        longitude: -106.65,
        zoom: 9
    });


    return (
        <>
            <h1>Map Page</h1>
            <Container>
                <h1>Here is the map</h1>
                <ReactMapGL
                    {...viewport}
                    width="50vw"
                    height="50vh"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                >
                    {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
                </ReactMapGL>

            </Container>
        </>
    )
}