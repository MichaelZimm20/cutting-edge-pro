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
import "./App.css";

import Navigation from "./components/Nav";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navigation />
            <Routes>
              <Route
                path="/"
                element={
                  <div
                    className="d-flex flex-column h-100"
                    style={{ zIndex: 100 }}
                  >
                    <LandingPage />
                  </div>
                }
                exact
              />

              <Route path="/home" element={<Home />} />
              <Route path="/signuppage" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/wood" element={<Wood />} />
              <Route exact path="/metal" element={<Metal />} />
              <Route exact path="/Acrylic" element={<Acrylic />} />
              <Route exact path="/Upload" element={<Upload />} />
            </Routes>

            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
