import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GetToken} from "./utility/TokenHelper";
import ProductListPage from "./Pages/ProductListPage";
import CartListPage from "./Pages/CartListPage";
import UserLoginPage from "./Pages/UserLoginPage";
import OTPPage from "./Pages/OTPPage";
import NavBar from "./components/NavBar";

const App = () => {
  if (GetToken()) {
    return (
      <>
        <BrowserRouter>
     
          <Routes>
            <Route path="/router/" element={<ProductListPage />} />
            <Route path="/router/cart" element={<CartListPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
       
          <Routes>
            <Route path="/router/" element={<ProductListPage />} />

            <Route path="/router/login" element={<UserLoginPage />} />
            <Route path="/router/otp" element={<OTPPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default App;
