import React from 'react'
import {Card, Container, Col, Row, Image, Jumbotron} from "react-bootstrap";
import './About.css'

export const AboutUs = () => {
    return(
        <>
            <h1>About Us</h1>


            <Jumbotron fluid>
                <Container>
                    <h1>NM Gets Sober</h1>
                </Container>
            </Jumbotron>

            <Container fluid>
                <Row>
                    <Card className="vic profile picture">
                        <Image src="/images" alt="sky"/>
                    </Card>
                    <Col md={6}>
                        <Card className="information">
                            <p>
                                Crack Jennys tea cup killick Corsair topsail splice the main brace capstan broadside
                                blow the man down tackle topgallant. Code of conduct hogshead loaded to the gunwalls
                                hail-shot hardtack case shot swab yo-ho-ho hulk boom. Log stern grog blossom bilge rat
                                Brethren of the Coast salmagundi carouser galleon blow the man down scuppers.

                                Boom strike colors log dance the hempen jig haul wind Brethren of the Coast come about
                                mutiny execution dock galleon. Code of conduct galleon gunwalls overhaul strike colors
                                hands log interloper brig American Main. Heave down bilged on her anchor to go on
                                account poop deck chandler sutler gally spirits crow's nest rigging.
                            </p>

                        </Card>
                    </Col>
                </Row>
            </Container>



        </>


    )
}
