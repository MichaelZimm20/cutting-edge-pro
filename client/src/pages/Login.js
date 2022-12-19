// imports 
import React, { useState } from "react";
import LoginPage from "../components/Loginpage";


function Login() {
    const [modalShow, setModalShow] = useState(true);

    return (
        <>
            <LoginPage
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Login;