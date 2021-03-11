import React, {useEffect, useState} from "react"
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../../../index.css"
import {NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {SignUpModal} from "./sign-up/SignUpModal";
import {SignInModal} from "./sign-in/SignInModal";
import {SignOutComponent} from "./SignOut";
import {fetchAuth} from "../../../../store/auth";

export const NavBar = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the user
    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }

    return (
        <>
            <Navbar id="navbar" expand="lg" className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link id="black" href="/">Home</Nav.Link>
                    <Nav.Link id="black" href="/map">Map</Nav.Link>
                    <Nav.Link id="black" href="/aboutus">About Us</Nav.Link>
                    <NavDropdown id="basic-nav-dropdown" title="More">
                    <SignUpModal/>
                    {/* conditional render if user has jwt / is logged in */}
                    {auth !== null && (
                        <>
                            <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                    <NavDropdown.Item title={auth?.profileUsername ?? ""} id="nav-link navbar-username">
                        Profile
                            <Link to={`/profile/${auth?.profileId}`}/>
                        </NavDropdown.Item>
                    <SignOutComponent/>
                        </>
                    )}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}