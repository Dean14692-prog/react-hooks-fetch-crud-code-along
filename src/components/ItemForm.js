import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      name: name,
      isInCart: false,
    };
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then(onAddItem);

    setName("");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
