import React from 'react';
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';


const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
      dispatch({ 
          type: REMOVE_FROM_CART,
          _id: item._id
      });

      idbPromise('cart', 'delete', { ...item })
  };



  // allow users to manually edit the quantity of shopping cart items 
  const onChange = (e) => {
      const value = e.target.value;

      if (value === '0') {
          dispatch({
              type: REMOVE_FROM_CART,
              _id: item._id
          });

          idbPromise('cart', 'delete', { ...item });
      } else {
          dispatch({
              type: UPDATE_CART_QUANTITY,
              _id: item._id,
              purchaseQuantity: parseInt(value)
          });

          idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
      }
  }
  
  return (
    <div className="flex-row">
      
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            onChange={onChange}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;