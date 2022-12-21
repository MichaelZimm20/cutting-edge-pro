// import react
import React, { useState } from "react";

// imports
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

// bootstrap & react-bootstrap
import { Button, Modal, Form } from "react-bootstrap";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  // form submission handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // changing the values inputed into the form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Member Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="flex-row space-between my-2">
            <Form.Label htmlFor="Username" className="font-weight-bold">
              Username:
            </Form.Label>
            <Form.Control
              placeholder="Username"
              name="username"
              type="username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="flex-row space-between my-2">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="flex-row space-between my-2">
            <Form.Label htmlFor="pwd">
              <span className="font-weight-bold">Password:</span>
            </Form.Label>
            <Form.Control
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="flex-row flex-end">
            <Button
              className="w-100 my-3 mx-auto d-flex justify-content-center bg-warning border-dark border-0 fs-5"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div className="justify-content-between">
          <Link to="/login" style={{ textDecoration: "none" }}>
            Already a member? Log in
          </Link>
        </div>
        <Link to="/">
          <Button onClick={props.onHide}>Close</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default Signup;
