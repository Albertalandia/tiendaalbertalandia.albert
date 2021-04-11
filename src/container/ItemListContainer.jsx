import React from "react";
import "../styles/App.css";

let ItemListContainer = (props) => {
  return (
    <h1>
      BIENVENIDOS A LA TIENDA DE {props.brand} ACÁ VAS A ENCONTRAR{" "}
      {props.articulos} QUE TE HARAN BASTANTE FELIZ`
    </h1>
  );
};
export default ItemListContainer;
