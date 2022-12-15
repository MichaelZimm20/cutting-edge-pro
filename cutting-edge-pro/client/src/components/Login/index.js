// // import react 
// import React, { useState } from 'react'; 
// import Auth from '../../utils/auth'; 
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN } from '../../utils/mutations';
// // bootstrap & react-bootstrap
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';

// function Login(props) {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login] = useMutation(LOGIN);

//     // form submission handler
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         const mutationResponse = await login({
//             variables: {
//                 email: formState.email,
//                 password: formState.password,
//                 username: formState.username,
//             },
//         });
//         const token = mutationResponse.data.login.token;
//         Auth.login(token);
//     }

    
//     // changing the values inputed into the form
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     return (
//         <Modal
//           {...props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//               Signup
//             </Modal.Title>
//             <div className='justify-content-between'>
//                 <Link to="/login">← Go to Login</Link>
//             </div>
//           </Modal.Header>
//           <Modal.Body>
//             <h4>Signup Below</h4>
//                 <form onSubmit={handleFormSubmit}>
//                     <div className="flex-row space-between my-2">
//                     <label htmlFor="firstName">First Name:</label>
//                     <input
//                         placeholder="First"
//                         name="firstName"
//                         type="firstName"
//                         id="firstName"
//                         onChange={handleChange}
//                     />
//                     </div>
//                     <div className="flex-row space-between my-2">
//                     <label htmlFor="lastName">Last Name:</label>
//                     <input
//                         placeholder="Last"
//                         name="lastName"
//                         type="lastName"
//                         id="lastName"
//                         onChange={handleChange}
//                     />
//                     </div>
//                     <div className="flex-row space-between my-2">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         placeholder="youremail@test.com"
//                         name="email"
//                         type="email"
//                         id="email"
//                         onChange={handleChange}
//                     />
//                     </div>
//                     <div className="flex-row space-between my-2">
//                     <label htmlFor="pwd">Password:</label>
//                     <input
//                         placeholder="******"
//                         name="password"
//                         type="password"
//                         id="pwd"
//                         onChange={handleChange}
//                     />
//                     </div>
//                     <div className="flex-row flex-end">
//                     <button type="submit">Submit</button>
//                     </div>
//                 </form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       );
// }

// export default Login;