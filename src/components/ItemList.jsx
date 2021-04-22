import React from "react";
import Item from "./Item";

let ItemList = ({ data }) => {
  return (
    <div>
      {data.map((data) => (
        <Item data={data} />
      ))}
    </div>
  );
};
export default ItemList;
