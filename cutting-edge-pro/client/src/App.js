import React, { useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//develop test
// import './App.css';

import Navigation from "./components/Nav";
import Home from "./pages/Home";
import Signup from "./pages/SignupPage";
import Login from "./pages/Login";
import { StoreProvider } from "./utils/GlobalState";
import Wood from "./pages/Wood";
import Metal from "./pages/Metal";
import Acrylic from "./pages/Acrylic";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  //   const [imageSelected, setImageSelected] = useState('');
  //   // Declare a state variable to store the image link
  //   const [imageLink, setImageLink] = useState('');

  // const uploadImage = () => {
  //   const formData = new FormData()
  //   formData.append("file", imageSelected)
  //   formData.append('upload_preset', 'xcpvb7ai')

  //   Axios.post('https://api.cloudinary.com/v1_1/dt1ejaaxy/image/upload', formData)
  //   .then((response) => {
  //     console.log(response);
  //     const imageLink = response.data.url;

  //     console.log(imageLink);
  //     setImageLink(imageLink);  // Update the image link in state
  //   });
  // };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navigation />
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signuppage" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/wood" element={<Wood />} />
              <Route exact path="/metal" element={<Metal />} />
              <Route exact path="/Acrylic" element={<Acrylic />} />
              {/* <div className="App">
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

              </header>
            </div> */}
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
