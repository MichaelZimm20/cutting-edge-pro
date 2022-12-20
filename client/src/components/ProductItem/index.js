// CHECKED


import React from "react";
import { Figure, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();
  
  const {
    image,
    _id,
    name,
    price,
    description
  } = item;
  
  const { cart } = state;
  
  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
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
   
  <div className="card px-1 py-1 m-2">
    <Card.Body>
    <Link to={`/products/${_id}`}>
        <img style={{width: '50%', height: '75vh', }}
          alt={name}
          src={`/images/${image}`}
        />
      </Link>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>Price: <span>${price}</span></Card.Text>
      <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
    </Card.Body>
    </div>
  );
}

export default ProductItem;
