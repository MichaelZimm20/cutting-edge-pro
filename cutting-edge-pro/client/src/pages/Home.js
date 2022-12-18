import React from "react";
import Cart from "../components/Cart";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../index.css'


//import images 
import lumber from '../assets/images/Lumber-cut.jpg'
import woodEngraving from '../assets/images/engraved-wood.jpg'
import metalEngraving from '../assets/images/metal-sign.jpg'
const Home = () => {
    return (
        <div className="bg-color">
            <div className="my-5 vh-100">
                
                <CardGroup className="my-auto mx-auto">
                {/* <div className="col-md-6 d-flex h-50 justify-content-start "> */}
                    <Card>
                        <Card.Img variant="top" src={woodEngraving} />
                        <Card.Body>
                            <Card.Title>Wood Art</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to='/wood'><Button className="text-light w-100">Shop Wood</Button></Link>
                        </Card.Footer>
                    </Card>
                {/* </div> */}
                    
                    {/* <div className="col-md-6 d-flex h-50 justify-content-end"> */}
                        <Card>
                            <Card.Img variant="top" src={metalEngraving} />
                            <Card.Body>
                                <Card.Title>Metal Art</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/metal'><Button className="text-light w-100">Shop Metal</Button></Link>
                            </Card.Footer>
                        </Card>
                    {/* </div> */}
                    
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Vinyl Art</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link to='/vinyl'><Button className="text-light w-100">Shop Vinyl</Button></Link>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <Cart />
            </div>
        </div>
    )
};

export default Home;