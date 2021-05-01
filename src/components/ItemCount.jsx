import React from "react";

let ItemCount = ({ cartItems, onAdd, onRemove }) => {
  return (
    <aside className="Basket">
            <h2>Cart Items</h2>
            <div>---</div>
              <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
              
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
                      
            <div>
                          <h3>{item.name}</h3>
                          
              <img className="imgCart" alt={item.name} src={item.cover}></img>
                          <h4>Price:{item.price} </h4>
                          <button onClick={() => onAdd(item)}>+</button>
                          <button onClick={() => onRemove(item)}>-</button>
                          
              <div>
                {item.qty} x ${item.price.toFixed(2)}{" "}
              </div>
                          <div>--</div>
                        
            </div>
                    
          </div>
        );
      })}
          
    </aside>
  );
};

export default ItemCount;
