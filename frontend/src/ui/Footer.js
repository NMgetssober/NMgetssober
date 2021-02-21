import React from "react"
import "./index.css"
import {Container, Row, Col} from "react-bootstrap";

export const Footer = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="footer text-center">
                        <p className="small mb-0 pb-0">NMGetsSober is a resource to help connect New Mexicans with local treatment
                            centers and free community-based groups in their fight against substance use disorder.</p>
                        <p className="small"> &copy; 2021 Copyright VBC </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}