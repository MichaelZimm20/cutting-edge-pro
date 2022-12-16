import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from "../utils/helpers";


//imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Cart from '../components/Cart';
import lumber from '../assets/images/Lumber-cut.jpg'
import woodEngraving from '../assets/images/engraved-wood.jpg'
import metalEngraving from '../assets/images/metal-sign.jpg'

import products from '../components/Products';

function Wood() {

console.log(products);
console.log(products)


const smallProduct = products.find(product => product.name.name === 'Small');
console.log(smallProduct); // {name: {name: 'Small'}, price: 29.99, quantity: 45}
console.log(smallProduct.name)
console.log(smallProduct.price)
console.log(smallProduct.quantity)

const mediumProduct = products.find(product => product.name.name === 'Medium');
console.log(mediumProduct); // {name: {name: 'Medium'}, price: 59.99, quantity: 20}
console.log(mediumProduct.name)
console.log(mediumProduct.price)
console.log(mediumProduct.quantity)

  // const [state, dispatch] = useStoreContext();
  // const { cart } = state;

  // const addToCart = () => {
  //   // find the cart item with the matching id
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id);

  //   // if there was a match, call UPDATE with a new purchase quantity
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity:  parseInt(itemInCart.purchaseQuantity) + 1
  //     });

  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1 
  //     })
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item, purchaseQuantity: 1}
  //     });

  //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1});
  // }
  // };


  // const {
  //   name,
  //   _id,
  //   price,
  //   quantity
  // } = item;
 
  return (
    <div className='d-flex justify-content-between mt-3'>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={lumber} />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={woodEngraving} />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={metalEngraving} />           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>{smallProduct.name.name}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: ${smallProduct.price}</Card.Text>
              <Card.Text>{smallProduct.quantity} {pluralize("item", products.quantity)} in stock</Card.Text>
              {/* <Button variant="primary" onClick={addToCart}>Add to Cart</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="product-image-2.jpg" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $60</Card.Text>
              <Card.Text>Quantity: 15</Card.Text>
              <Card.Text>Size: Medium</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="product-image-3.jpg" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text>
              <Card.Text>Quantity: 20</Card.Text>
              <Card.Text>Size: Large</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="product-image-3.jpg" />
            <Card.Body>
              <Card.Title>Product 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text>
              <Card.Text>Quantity: 20</Card.Text>
              <Card.Text>Size: Custom </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
        <Cart/>
        </div>
        )}

        export default Wood;