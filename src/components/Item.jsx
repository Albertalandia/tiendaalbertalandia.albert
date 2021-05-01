import React from "react";

let Item = ({ data, onAdd }) => {
  return (
    <div>
      <img alt={data.name} src={data.cover} />
      <h3>{data.name}</h3>
      <h4>sku:{data.SKU}</h4>
      <h4>Stock Disponible: {data.Stock}</h4>
      <h4>{data.price}</h4>
      <p>{data.description}</p>
      <button className="btn" onClick={() => onAdd(data)}>
        Add To Cart
      </button>
    </div>
  );
};
export default Item;
