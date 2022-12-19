import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { pluralize } from "../../utils/helpers"

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
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


  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;


  return (
    <Figure>
      <Link to={`/products/${_id}`}>
        <Figure.Image
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <Figure.Caption>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </Figure.Caption>
      <button onClick={addToCart}>Add to cart</button>
    </Figure>
  );
}

export default ProductItem;
