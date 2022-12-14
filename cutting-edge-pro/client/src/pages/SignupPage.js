// imports 
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Signup from "../components/Signup/Signup";
import AdminSignup from "../components/Signup/adminSignUp";

function SignupPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant='primary' onClick={() => setModalShow(true)}>
                User SignUp
            </Button>

            <Signup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Button variant='primary' onClick={() => setModalShow(true)}>
               Admin SignUp
            </Button>

            <Signup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default SignupPage;