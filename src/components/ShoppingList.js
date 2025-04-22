import React from "react";
import Item from "./Item";

function ShoppingList({ items = [], onUpdateItem, onDeleteItem }) {
  return (
    <ul className="Items">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onUpdateItem={onUpdateItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
