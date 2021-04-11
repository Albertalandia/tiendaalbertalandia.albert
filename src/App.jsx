import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";

function App() {
  const saludo = {
    brand: "ALBERTALANDIA",
    articulos: "Stickers, pins, imanes, llaveros",
  };
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer brand={saludo.brand} articulos={saludo.articulos} />
    </div>
  );
}

export default App;
