import React from "react";
import "../styles/App.css";

let Menu = (props) => {
  return (
    <div>
      <ul class="menu">
        <li>
          {" "}
          <a href="#">Stickers</a>
        </li>
        <li>
          {" "}
          <a href="#">Pins</a>
        </li>
        <li>
          {" "}
          <a href="#">Llaveros</a>
        </li>
        <li>
          {" "}
          <a href="#">Imanes</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
