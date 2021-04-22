import React from "react";

let Item = ({ data }) => {
  return (
    <div>
      <img alt={data.name} src={data.cover} />
      <h3>{data.name}</h3>
      <h4>sku:{data.SKU}</h4>
      <h4>{data.price}</h4>
      <p>{data.description}</p>
      <button>ADD TO CART</button>
    </div>
  );
};
export default Item;
