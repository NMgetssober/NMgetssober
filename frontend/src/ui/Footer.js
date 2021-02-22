import React from "react"
import "./index.css"
import {Container, Row, Col} from "react-bootstrap";

export const Footer = () => {
    return (
        <>
            <Container fluid className="footer text-center">
                <Row>
                    <Col md={6} className="justify-content-center">
                        <h5 className="py-4">NMGetsSober is a resource to help connect New Mexicans with local treatment
                            centers and free community-based groups in their fight against substance use disorder.</h5>
                    </Col>
                    <Col md={3} className="text-md-left">
                        <h5>NM Sobriety & Treatment Hotlines</h5>
                        <ul className="px-0">
                            <li className="list-unstyled">
                                Alamogordo (575) 541-3011
                            </li>
                            <li className="list-unstyled">
                                Albuquerque (505) 227-8586
                            </li>
                            <li className="list-unstyled">
                                Las Cruces (575) 541-3487
                            </li>
                            <li className="list-unstyled">
                                Santa Fe (505) 216-2904
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="text-md-left">
                        <h5>Additional Resources</h5>
                            <ul className="px-0 text-md-left">
                                <li className="list-unstyled">
                                    <a href="https://aa.org/">Alcoholics Anonymous (AA)</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://www.crystalmeth.org/">Crystal Meth Anonymous (CMA)</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://na.org/">Narcotics Anonymous (NA)</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://ca.org/">Cocaine Anonymous (CA)</a>
                                </li>
                            </ul>
                    </Col>

                </Row>
                <div className="text-center pb-3">
                    <Container fluid>
                        &copy; 2021 Copyright VBC
                    </Container>
                </div>
            </Container>

        </>
    )
}