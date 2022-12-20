// imports 
import React, { useState } from "react";
import Signup from "../components/Signup/Signup";
// import AdminSignup from "../components/Signup/adminSignUp";

function SignupPage() {
    const [modalShow, setModalShow] = useState(true);

    return (
        <>
            
            <Signup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            {/* <Button variant='primary' onClick={() => setModalShow(true)}>
               Admin SignUp
            </Button>

            <AdminSignup
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </>
    );
};

export default SignupPage;