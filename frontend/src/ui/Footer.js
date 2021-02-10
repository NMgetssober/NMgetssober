import React from "react"
import "./index.css"
import {Container, Row, Col} from "react-bootstrap";


export const Footer = () => {
    return (
        <>

            <div className="text-center">
                <Container fluid className="footer">
                    <p>NMGetsSober is a resource to help connect New Mexicans with local treatment centers and free community-based groups in their fight against substance use disorder.</p>
                    <p> &copy; 2021 Copyright VBC </p>
                </Container>
            </div>

        </>
    )
}

export default Footer;