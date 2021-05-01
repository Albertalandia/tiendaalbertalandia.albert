import React from "react";
import Item from "./Item";

let ItemList = ({ data, onAdd }) => {
  return (
    <div>
      {data.map((data) => (
        <Item data={data} onAdd={onAdd} />
      ))}
    </div>
  );
};
export default ItemList;
