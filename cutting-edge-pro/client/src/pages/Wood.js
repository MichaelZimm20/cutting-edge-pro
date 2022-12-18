// import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from "../utils/helpers";

//imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card, Button, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Cart from '../components/Cart';
//import product pictures
import small1 from '../assets/images/wood-small.webp'
import small2 from '../assets/images/wood-small-cut-2.jpg'
import small3 from '../assets/images/wood-small-cut.webp'

import medium1 from '../assets/images/medium-wood-4.jpg'
import medium2 from '../assets/images/medium-wood.webp'
import medium3 from '../assets/images/medium-wood-3.jpg'

import large1 from '../assets/images/large-wood-3.jpg'
import large2 from '../assets/images/large-wood-2.jpg'
import large3 from '../assets/images/example-logo.jpg'

import products from '../components/Products';

function Wood(item) {

  // Image array attempt
  // const [images, setImages] = useState([]);

  // useEffect(()=>{
  //   // Get a list of all the files in the directory
  //   // const imageFiles = require.context('../assets/images/wood', false, /\.png|jpe?g|svg)$/);
  //   const imageFiles = require.context('../assets/images/wood/small', false, /\.png|jpe?g|svg$/);
  //   console.log(imageFiles);
  //   // Map the image file names to an array of objects containing the file name and path
  //   const images = imageFiles.keys().map(imageFile => {
  //     return {
  //       name: imageFile.replace('./', ''),
  //       path: imageFiles(imageFile)
  //     }
  //   });
  //   setImages(images);
  
  // },[]);




  // console.log(products);
  
  
  
  const smallProduct = products.find(product => product.name.name === 'Small');
  // console.log(smallProduct); // {name: {name: 'Small'}, price: 29.99, quantity: 45}
  // console.log(smallProduct.name)
  // console.log(smallProduct.price)
  // console.log(smallProduct.quantity)
  
  const mediumProduct = products.find(product => product.name.name === 'Medium');
  // console.log(mediumProduct); // {name: {name: 'Medium'}, price: 59.99, quantity: 20}
  // console.log(mediumProduct.name)
  // console.log(mediumProduct.price)
  // console.log(mediumProduct.quantity)

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const addToCart = (item) => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === item._id);

    

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity:  parseInt(itemInCart.purchaseQuantity) + 1
      });

      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1 
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1}
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1});
  }
  };


  return (
    <div className='d-flex  mt-3'>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={small1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={small2}alt='wood' />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={small3} alt='wood'/>         
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>{smallProduct.name.name}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: ${smallProduct.price}</Card.Text>

              <Card.Text>Size: Small</Card.Text>
              
             
              <Button variant="primary"  
              key={item._id}
              onClick={() => addToCart(item)}>Add to Cart</Button>
             
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
          <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={medium1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={medium2} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={medium3} alt='wood'/>           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Medium</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $60</Card.Text>
              
              <Card.Text>Size: Medium</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
          <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={large1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={large2} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={large3} alt='wood'/>           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Large</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text>
              
              <Card.Text>Size: Large</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        <Row className='justify-content-center mt-4'>
        <Col xs={6}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={large3} />
        <Card.Body>
          <Card.Title>Custom Size</Card.Title>
          <Card.Text>
            Please provide us with your image and dimensions of what size you would like. We will review the order and send you a price quote within 24hrs.
          </Card.Text>

          <Form>
            <Form.Label htmlFor="customSize">Custom size</Form.Label>
            <FormControl type="text" name="customSize" id="customSize" placeholder="Enter custom size" />
          </Form>

          <Form>
            <Form.Label htmlFor="email">Email</Form.Label>
            <FormControl type="email" name="email" id="email" placeholder="Enter your email" />
          </Form>

          <Form>
            <Form.Label htmlFor="phone">Phone number</Form.Label>
            <FormControl type="text" name="phone" id="phone" placeholder="Enter your phone number" />
          </Form>

          
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
        </Row>
        </Container>
        
        <Cart  key={item._id}addToCart={addToCart}/>
        </div>
        
        )}

        export default Wood;