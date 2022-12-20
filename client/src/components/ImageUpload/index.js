import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { useNavigate } from "react-router-dom";
//develop test
import '../../App.css';
import Cart from "../Cart";

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const ImageUpload = () => {
  const [state] = useStoreContext();
  const [imageSelected, setImageSelected] = useState('');

  // Declare a state variable to store the image link
  const [imageLink, setImageLink] = useState('');
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const uploadImage = () => {
    const formData = new FormData()

    formData.append("file", imageSelected)
    formData.append('upload_preset', 'xcpvb7ai')

    Axios.post('https://api.cloudinary.com/v1_1/dt1ejaaxy/image/upload', formData)
      .then((response) => {
        console.log(response);
        const imageLink = response.data.url;

        console.log(imageLink);
        setImageLink(imageLink);  // Update the image link in state
      });
  };

  // useEffect use to handle stripe checkout and redirect to stripe
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

    console.log('dataStripe', data)
  // upon submission get items for checkout and push them to new array
  function submitCheckout() {
    const productIds = [];
    console.log(productIds)

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    })

    getCheckout({
      variables: { products: productIds }
    })
  }

  // const navigate = useNavigate();

  // const navigateStripe = () => {
  //   // 👇️ navigate to google for testing
  //   navigate('/home');
  // };


  return (
    <div className="App">
      <Cart />
      <header className="App-header">
        <div>
          <input type='file'
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload Image</button>
        </div>
        <div>
          <Image style={{ width: 200 }} cloudName="dt1ejaaxy" publicId={imageLink} />
        </div>
        <button onClick={submitCheckout}>Continue To Stripe!</button>
      </header>
    </div>
  );
};
export default ImageUpload;
