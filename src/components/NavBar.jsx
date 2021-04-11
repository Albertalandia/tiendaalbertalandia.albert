import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import CartWidget from "../components/CartWidget";

let NavBar = (props) => {
  return (
    <div>
      <Logo />
      <Menu />
      <CartWidget />
    </div>
  );
};
export default NavBar;
