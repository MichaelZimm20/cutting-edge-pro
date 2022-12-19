// import react 
import React, { useState } from 'react'; 
import Auth from '../../utils/auth'; 
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
// bootstrap & react-bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    // form submission handler
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: {
                    email: formState.email,
                    password: formState.password,
                },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
            <Modal.Title  id="contained-modal-title-vcenter">
              Member Login
            </Modal.Title>
        
          </Modal.Header>
          <Modal.Body>
            
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                       
                        <Form.Control
                            placeholder="Email"
                            name="email"
                            type="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='my-2'>
                        
                        <Form.Control
                            placeholder="Password"
                            name="password"
                            type="password"
                            id="pwd"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {error ? (
                        <div>
                            <p className="error-text">The provided credentials are incorrect</p>
                        </div>
                    ) : null}
                    <div className="flex-row flex-end">
                        <Button className='w-100 my-3 mx-auto d-flex justify-content-center bg-warning border-dark border-0 fs-5' type="submit">Submit</Button>
                    </div>
                </Form>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <div>
                <Link to="/signuppage" style={{textDecoration: 'none'}}>Create new account</Link>
            </div>
            <Link to='/'><Button onClick={props.onHide}>Close</Button></Link>
          </Modal.Footer>
        </Modal>
      );
}

export default Login;