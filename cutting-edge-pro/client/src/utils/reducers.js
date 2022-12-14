// import useReducer Hook
import { useReducer } from 'react';

// import actions
import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from './actions';


export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS: 
            return {
                ...state,
                products: [...action.products],
            }
        
        // if a user adds and item to the cart         
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            }
        
        // action for handling adding multiple items to the cart 
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            }
        
        // action for removing an item from a cart 
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        
        // action for updating item quantity in the cart
        case UPDATE_CART_QUANTITY: 
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if(action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            }  
        
        // clear items from cart 
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        // action to open the cart with the products the user selected
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        
        // if it's none of these actions, do not update state at all and keep things the same!    
        default:
            return state;
    }
}

// will be used to help intiialize our global state object., then provide updating functionality by running through reducer()
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }