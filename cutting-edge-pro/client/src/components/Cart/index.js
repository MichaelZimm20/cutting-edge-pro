import React from 'react';
import Auth from '../../utils/auth';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";

// import fontawesome icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

// imports 
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';


const Cart = () => {
    const [state,dispatch] = useStoreContext();
    const navigate = useNavigate();

const navigateUpload = () => {
  // 👇️ navigate to google for testing
  navigate('Upload');
};
    
    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    if (!state.cartOpen) {
        return (
            <div className='cart-closed' onClick={toggleCart}>
                <span role='img' aria-label='cart'> <FontAwesomeIcon icon={faBasketShopping} style={{ width: '35px', height: '35px'}}/></span>
               
            </div>
        )
    }

  return (
    <div className="cart bg-light">
      <div className="close" onClick={toggleCart}>[close]</div>
      <Card.Title >Shopping Cart</Card.Title>
      <div>
          <CartItem item={{name:'Camera', image:'camera.jpg', price:5, purchaseQuantity:3}} />
          <CartItem item={{name:'Soap', image:'soap.jpg', price:6, purchaseQuantity:4}} />

          <div className="flex-row d-flex justify-content-between">
            <strong>Total: $0</strong>
            {
              Auth.loggedIn() ?
                <button onClick={navigateUpload}>
                  Checkout and Upload.
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
  );
};

export default Cart;