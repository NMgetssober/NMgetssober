import React from "react";
import {Button, NavLink} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";


export const SignInModal = (props) => {
    const {handleShow, handleClose, show} = props


    return (
        <>
            <NavLink id="black" onClick={handleShow}>
                Sign In
            </NavLink>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignInForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}