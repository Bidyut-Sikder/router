import React, {useEffect, useState} from "react";
//import myImg from "../images/DesignAGENCY.png";
import {NavLink} from "react-router-dom";
import {GetToken, RemoveToken} from "../utility/TokenHelper";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (GetToken()) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md ">
        <a href="" className="navbar-brand">
          {/* <img src={myImg} alt="" /> */}
          <h1>Navbar</h1>
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collaps"
          data-bs-target="#btn"
        >
          click
        </button>

        <div className="collaps navbar-collapse sticky-top" id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={"/cart_project"} className="nav-link">
                Products
              </NavLink>
            </li>
            {login ? (
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Carts
                </NavLink>
              </li>
            ) : (
              <> </>
            )}

            {login ? (
              <li className="nav-item">
                <button
                  onClick={() => RemoveToken()}
                  type="button"
                  style={{background: "#FF007F"}}
                  className="btn  ml-1"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  type="button"
                  style={{background: "#20B25B"}}
                  className="btn  ml-1"
                >
                  <NavLink to="/login" style={{textDecoration: "none"}}>
                    Login
                  </NavLink>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );












// return(
//     <>
//     <div className="container">
        
//         <NavLink to="/cart" className="nav-link">
//                    Carts
//                 </NavLink>
       
//     </div>
    
//     </>
// )














};

export default NavBar;
