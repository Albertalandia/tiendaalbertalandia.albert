import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ItemList from "../components/ItemList";
import Data from "../Stock";

let ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newProducts = new Promise((resolve, reject) => {
      let productData = Data;
      setTimeout(() => {
        resolve(productData);
      }, 3000);
    });

    newProducts
      .then(
        (res) => {
          setData(res);
        },
        (reject) => {}
      )
      .then((newres) => {})
      .catch((err) => {})
      .finally(() => {});
  }, []);

  console.log(data);
  return (
    <div>
      <h1>
        BIENVENIDOS A LA TIENDA DE {props.brand} ACÁ VAS A ENCONTRAR{" "}
        {props.articulos} QUE TE HARAN BASTANTE FELIZ`
      </h1>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
