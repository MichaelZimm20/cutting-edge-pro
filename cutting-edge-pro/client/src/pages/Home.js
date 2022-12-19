// import React from "react";
// import Cart from "../components/Cart";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import '../index.css'

// //import images 
// import lumber from '../assets/images/Lumber-cut.jpg'
// import woodEngraving from '../assets/images/engraved-wood.jpg'
// import metalEngraving from '../assets/images/metal-sign.jpg'
// const Home = () => {
//     return (
//         <div className="bg-color">

//             <div className="my-5 vh-100">

//                 <CardGroup className="my-auto mx-auto">
//                 {/* <div className="col-md-6 d-flex h-50 justify-content-start "> */}
//                     <Card>
//                         <Card.Img variant="top" src={woodEngraving} />
//                         <Card.Body>
//                             <Card.Title>Wood Art</Card.Title>
//                             <Card.Text>
//                                 This is a wider card with supporting text below as a natural lead-in
//                                 to additional content. This content is a little bit longer.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Link to='/wood'><Button className="text-light w-100">Shop Wood</Button></Link>
//                         </Card.Footer>
//                     </Card>
//                 {/* </div> */}

//                     {/* <div className="col-md-6 d-flex h-50 justify-content-end"> */}
//                         <Card>
//                             <Card.Img variant="top" src={metalEngraving} />
//                             <Card.Body>
//                                 <Card.Title>Metal Art</Card.Title>
//                                 <Card.Text>
//                                     This card has supporting text below as a natural lead-in to
//                                     additional content.{' '}
//                                 </Card.Text>
//                             </Card.Body>
//                             <Card.Footer>
//                                 <Link to='/metal'><Button className="text-light w-100">Shop Metal</Button></Link>
//                             </Card.Footer>
//                         </Card>
//                     {/* </div> */}

//                     <Card>
//                         <Card.Img variant="top" src="holder.js/100px160" />
//                         <Card.Body>
//                             <Card.Title>Acrylic Art</Card.Title>
//                             <Card.Text>
//                                 This is a wider card with supporting text below as a natural lead-in
//                                 to additional content. This card has even longer content than the
//                                 first to show that equal height action.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                         <Link to='/Acrylic'><Button className="text-light w-100">Shop Acrylic</Button></Link>
//                         </Card.Footer>
//                     </Card>
//                 </CardGroup>
//                 <Cart />
//             </div>
//         </div>
//     )
// };

// export default Home;



import React from "react";
import Cart from "../components/Cart";
import { Card, Button, Container, Row, Col, } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../index.css'

//import images 
import lumber from '../assets/images/Lumber-cut.jpg'
import woodEngraving from '../assets/images/engraved-wood.jpg'
import metalEngraving from '../assets/images/metal-sign.jpg'
const Home = () => {
    return (
        <div className=" bg-color d-flex mt-3 ">
            <div className="my-3 mx-3 " >
                <Container fluid >
                    <Col >
                    <CardGroup className="my-3 mx-3">
                        <Card className=" card text-center mx-3">
                            <Card.Img variant="top" src={woodEngraving} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Wood Art</Card.Title>
                                <Card.Text>
                                    Click here to browse our wood art products!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/wood">
                                    <Button variant="primary" className="w-100">Shop Wood</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="card text-center mx-3 ">
                            <Card.Img variant="top" src={metalEngraving} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Metal Art</Card.Title>
                                <Card.Text>
                                    Click here to browse our metal art products!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/metal">
                                    <Button variant="primary" className="w-100">Shop Metal</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                        <Card className="card text-center mx-3 ">
                            <Card.Img variant="top" src={lumber} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>Acrylic Art</Card.Title>
                                <Card.Text>
                                    Click here to browse our acrylic art products!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/Acrylic">
                                    <Button variant="primary" className="w-100">Shop Acrylic</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    </Col>
                    
                        <Col  >
                            <Card >
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>About Us</Card.Title>
                                    <Card.Text>
                                        Our company specializes in using laser cutting technology to transform images into stunning pieces of art. Our team of talented artists and technicians use state-of-the-art laser cutters to carefully craft each piece, ensuring precise cuts and intricate details.
                                        <br />
                                        <br />
                                        Whether it's a simple design or a complex, multi-layered creation, we have the skills and expertise to bring your vision to life. Our laser cutters allow us to work with a wide range of materials, including wood, metal, and acrylic, giving you endless possibilities for your custom art piece.
                                        <br />
                                        <br />
                                        At our company, we take pride in our commitment to excellence and customer satisfaction. From start to finish, we work closely with our clients to ensure that their vision becomes a reality. If you're looking for a unique and eye-catching piece of art, look no further than our laser cutting services.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                    <Cart />
                </Container>

            </div>
        </div>
    )
}
export default Home;
