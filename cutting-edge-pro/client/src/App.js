import React, { useState } from "react";
import Axios from 'axios';
import {Image} from 'cloudinary-react';

import './App.css';

function App() {
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
    
    </header>
  </div>
);
}

export default App;