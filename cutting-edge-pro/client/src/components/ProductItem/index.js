import React from "react";
import Figure from 'react-bootstrap/Figure';

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
    _id,
    name,
    price,
  } = item;


  return (
    <Figure>
      <Figure.Caption>
        <Figure.Title>{name}</Figure.Title>
        <span>${price}</span>
      </Figure.Caption>
      <button onClick={addToCart}>Add to cart</button>
    </Figure>
  );
}

export default ProductItem;
