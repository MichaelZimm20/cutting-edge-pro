import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, _id, name, price, description } = item;

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });

      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <Card
        style={{ width: "50%", padding: "20px", left: "20%" }}
        className="product-item-card my-3"
      >
        <Link to={`/products/${_id}`}>
          <Card.Img variant="top" src={`/images/${image}`} />
        </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            Price: <span>${price}</span>
          </Card.Text>
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItem;
