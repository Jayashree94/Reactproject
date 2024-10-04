import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?t=st=1723423810~exp=1723427410~hmac=e80bc0b3b683460e77d51c9e34f4880fc6cf970cfe984b667c226539b78dcfb7&w=996"
          alt="food logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to= "/about"> About US </Link></li>
          <li>
            <Link to="/contactus">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            login === "Login" ? setLogin("Logout") : setLogin("Login")}}> {login} </button>
        </ul>
      </div> 
    </div>
  );
};

export default Header;
