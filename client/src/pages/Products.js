// import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from "../utils/helpers";

//imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import {  Container  } from 'react-bootstrap';
import Cart from '../components/Cart';
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
    <div className='d-flex  mt-3 bg-color'>
     <Container>
            <CategoryMenu />
            <ProductList />
      </Container>

      <Cart className='cart' key={item._id} addToCart={addToCart} />
    </div>

  )
}

export default Products;