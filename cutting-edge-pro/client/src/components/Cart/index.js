import React, { useEffect } from 'react';

import Auth from '../../utils/auth';
import { useLazyQuery } from '@apollo/client';
import { idbPromise } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { loadStripe } from '@stripe/stripe-js';
import { Card, Button } from 'react-bootstrap';
import './style.css';

// import fontawesome icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

// imports 
import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const Cart = () => {
    const [state,dispatch] = useStoreContext();
    // console.log('state', state);

    
  // useLazyQuery Hook

// add link from checkout to upload
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const navigate = useNavigate()
    const navigateUpload = () => {
      navigate('/Upload')
    }


  // useEffect ues to add multiple items to a cart
    useEffect(() => {
      async function getCart() {
        const cart = await idbPromise('cart', 'get');
        dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
      };
  
      if (!state.cart.length) {
        getCart();
      }
    }, [state.cart.length, dispatch]);


    // useEffect use to handle stripe checkout and redirect to stripe
    useEffect(() => {
      if (data) {
        stripePromise.then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        });
      }
    }, [data]);
    
    // open cart when item is added
    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    // will add up the prices of everything saved in state.cart
    function calculateTotal() {
      let sum = 0;
      state.cart.forEach((item) => {
        sum += item.price * item.purchaseQuantity;
      });
      return sum.toFixed(2);
    }

    

    // upon submission get items for checkout and push them to new array
    function submitCheckout() {
      const productIds = [];
  
      state.cart.forEach((item) => {
        for (let i = 0; i < item.purchaseQuantity; i++) {
          productIds.push(item._id);
        }
      })
  
      getCheckout({
        variables: { products: productIds }
      })
    }
    // if the cart is closed display the cart symbol
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
      {state.cart.length ? ( 
        <div>
            {state.cart.map(item => ( 
              <CartItem key={item._id} item={item} />
            ))}

            <div className="flex-row space-between">
              <strong>Total: ${calculateTotal()}</strong>
              {
                Auth.loggedIn() ?(
                  <Button className=" d-flex justify-content-between "onClick={() => {submitCheckout(); navigateUpload();}}>
                    Checkout
                  </Button>
                 ) :(
                  <span>(log in to check out)</span>
             ) }
            </div>
          </div>
      ) : (
        <h3>
        <span role="img" aria-label="shocked">
          😱
        </span>
        You haven't added anything to your cart yet!
      </h3>
      )}
    </div>
  );
};

export default Cart;