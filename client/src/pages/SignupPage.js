// imports
import React, { useState } from "react";
import Signup from "../components/Signup/Signup";

function SignupPage() {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <Signup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default SignupPage;
