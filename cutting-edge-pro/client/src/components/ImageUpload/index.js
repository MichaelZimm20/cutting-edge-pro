import React, { useState } from "react";
import Axios from 'axios';
import {Image} from 'cloudinary-react';
import {useNavigate} from "react-router-dom";
//develop test
import '../../App.css';

const ImageUpload = () => {
    const [imageSelected, setImageSelected] = useState('');
    // Declare a state variable to store the image link
    const [imageLink, setImageLink] = useState('');
  

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

const navigate = useNavigate();

const navigateStripe = () => {
  // 👇️ navigate to home for testing
  navigate('/Checkout');
};

return (
  <div className="App">
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
        <Image style={{width: 200}} cloudName="dt1ejaaxy" publicId={imageLink} />
    </div>
    <button onClick={navigateStripe}>Continue To Stripe!</button>
    </header>
  </div>
);
};
export default ImageUpload;
