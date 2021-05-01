import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ItemList from "../components/ItemList";
import Data from "../Stock";
import ItemCount from "../components/ItemCount";

let ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

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
        BIENVENIDOS A LA TIENDA DE Albertalandia ACÁ VAS A ENCONTRAR MUCHOS
        ARTICULOS QUE TE HARAN BASTANTE FELIZ
      </h1>
      <ItemCount cartItems={cartItems} onAdd={onAdd} />

      <ItemList data={data} onAdd={onAdd} />
    </div>
  );
};
export default ItemListContainer;
