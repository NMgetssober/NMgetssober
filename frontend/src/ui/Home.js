import React from "react"
import './Home.css'
import logo from './nmgslogo.png'
import {Container, Image, Row, Button} from "react-bootstrap";

export const Home = () => {
    return(
        <>
            <Container fluid className="background min-vh-100">
            <Container fluid className="mask justify-content-center">
                <Row className="justify-content-center">
                    <Image id={"logo"} src={logo}
                           alt="nmgslogo"/>
                </Row>
            </Container>
            <Container fluid>
                <Row id="words" className="justify-content-center mt-2 mb-3">Sobriety | Community | Recovery </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center mb-5">
                    <Button id="largeButton" size="lg" variant="outline-light" className="m-3 text-danger font-weight-bold">Treatment Centers</Button>
                    <Button id="largeButton" size="lg" variant="outline-light" className="m-3 text-danger btn btn-warning font-weight-bold">Community Activities</Button>
                </Row>
            </Container>
            </Container>
        </>
    )
}