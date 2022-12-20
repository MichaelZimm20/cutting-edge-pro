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
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

function Products(item) {
  // console.log(products);
  
  // use state for globalstate and dispatch to update the globalstate
  const [state, dispatch] = useStoreContext();

  // destructure the currentCategory from globalstate
  const { cart, currentCategory } = state;
  console.log(currentCategory);

  const addToCart = (item) => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === item._id);



    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });

      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };


  return (
    <div className='d-flex  mt-3'>
     <Container>
            <CategoryMenu />
            <ProductList />
     {/* <Row>
        <Col>
        <Card.Group>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item className="carousel-slide img">
                <img   src={small1} alt='wood'  />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img  src={small2} alt='wood' />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img   src={small3} alt='wood' />
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
             

              <Card.Text>{smallProduct.quantity}  Size: Small</Card.Text>
              <Button variant="primary"
                key={item._id}
                onClick={() => addToCart(item)}>Add to Cart</Button>

                </Card.Body>


          </Card> */}
          
          {/* <Card className="mx-3" style={{ width: '100%', height: 'auto' }}>
            <Carousel>
              <Carousel.Item className="carousel-slide img">
                <img  src={medium1} alt='wood' />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img  src={medium2} alt='wood' />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img  src={medium3} alt='wood' />
              </Carousel.Item >
            </Carousel>
            <Card.Body>
              <Card.Title>Medium</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $60</Card.Text> */}
              {/* <Card.Text>Quantity: 15</Card.Text> */}
              {/* <Card.Text>Size: Medium</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>

          <Card className="mx-3" style={{ width: '100%', height: 'auto' }}>
            <Carousel>
              <Carousel.Item className="carousel-slide img">
                <img className="" src={large1} alt='wood' />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img className="" src={large2} alt='wood' />
              </Carousel.Item>
              <Carousel.Item className="carousel-slide img">
                <img className="" src={large3} alt='wood' />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Large</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text> */}
              {/* <Card.Text>Quantity: 20</Card.Text> */}
               {/* <Card.Text>Size: Large</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>


        </Card.Group>
        </Col>
      </Row>

        <Col className='custom-card  mt-3 mb-3'fluid>
          <Card className="mx-3" >
            <Card.Img variant="top" src={large3} />
            <Card.Body>
              <Card.Title>Custom</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text> */}
              {/* <Card.Text>Quantity: 20</Card.Text> */}
              {/* <Card.Text>Size: Custom </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>  */}

      </Container>

      <Cart className='cart' key={item._id} addToCart={addToCart} />
    </div>

  )
}

export default Products;