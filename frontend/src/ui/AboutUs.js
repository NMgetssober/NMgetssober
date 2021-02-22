import React from 'react'
import {Card, Container, Col, Row, Image, Jumbotron, Nav} from "react-bootstrap";
import './About.css'
import newlogo from './images/new_logo.png';
import victorprofile from './images/victor_profile.png';
import cindyprofile from './images/cindy_profile.jpg';
import brandonprofile from './images/brandon_profile.jpg';


export const AboutUs = () => {
    return(
        <>
            <Container fluid className="bgcolor">
{/*Jumbotron*/}
                <Container fluid className="banner">
                     <Row className="text-center">
                            <Image fluid src={newlogo} alt='logo' id="newlogo" className=" mx-auto"/>
                    </Row>
                </Container>


 {/*Header*/}
            <Container fluid className='header'>
                <h1 className="py-4 font-weight-bold">Meet the Team</h1>
            </Container>

{/*About Me Cards */}
            <Container fluid>
                <Container className="profilepicture">
                    <Row>
                        <Col>
                            <Image src={victorprofile} alt="man" fluid/>
                        <Card.Title className="caption">Victor Chavez</Card.Title>
                    </Col>
                        <Col md="10">
                           <p>
                               Hello folks. My name is Victor Chavez. I have been working in the training development industry as an Instructional Designer/eLearning Developer and Corporate trainer since 2005. Before this I was a soldier in the US Army from 1996-2005 as a Chemical Operations Specialist/Chemical Recon. Since 2000, I have been a technology hobbyist in desktop management (Windows), Hardware installation, Networking, Software Application, and Internet Research. In 2020, I decided to attend Deep Dive Coding Boot camp to further develop my skillset and to ultimately change careers into either a Full Stack JavaScript developer or one of its many corresponding career subsets.
                           </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="profilepicture">
                    <Row>
                        <Col>
                            <Image src={cindyprofile} alt="man" fluid/>
                            <Card.Title>Cindy Chen</Card.Title>
                        </Col>
                        <Col md="9">
                            <p>  Hi everyone! My name is Cindy Chen and I am a pharmacist turned software engineer.  I just moved to Albuquerque in September from Boston and decided to use this transition in my life to invest in myself – so I enrolled in Deep Dive Coding. I was seeking new ways to challenge myself and I’ve always loved tinkering with computers and solving puzzles. Pursuing this boot camp has not only taught me to problem solve creatively but it also satisfied the itch for new challenges every day and allowed me to create tangible outputs. Seeing that healthcare is moving towards automation and digital health, I hope to be able to make a larger impact on patient care by combining my new technical skills along with my clinical background.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="profilepicture">
                    <Row>
                        <Col>
                            <Image src={brandonprofile} alt="man" fluid/>
                            <Card.Title>Brandon Whyte</Card.Title>
                        </Col>
                        <Col md="10">
                            <p> Hi my name is Brandon Whyte. I am new to the tech industry and looking to change careers. I was in the U.S. Air Force for 6 years, and have always had an interest in technology and found out about Deep Dive Coding. I decided to challenge myself and enroll in the Full Stack Web Development Boot camp. Part of that decision was job security and the flexibility that comes with software development and wanting work in a career field that is growing and the ability to add to my skill set.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
</Container>
        </>
    )
}
