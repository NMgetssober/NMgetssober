import React from "react"
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./index.css"
import {NavDropdown} from "react-bootstrap";
export const NavBar = () => {
    return (
        <>
            <Navbar id="navbar" expand="lg" className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link id="black" href="/">Home</Nav.Link>
                    <Nav.Link id="black" href="#link">Map</Nav.Link>
                    <Nav.Link id="black" href="/aboutus">About Us</Nav.Link>
                    <Nav.Link id="black" href="#link">Sign Up</Nav.Link>
                    {/*<NavDropdown title="Sign Up" id="basic-nav-dropdown">*/}
                    {/*    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}