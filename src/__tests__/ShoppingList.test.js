import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";
import "@testing-library/jest-dom"; // ✅ Add this line

test("displays all the items from the server after the initial render", () => {
  const items = [
    { id: 1, name: "Milk", isInCart: false },
    { id: 2, name: "Bread", isInCart: true },
  ];

  render(
    <ShoppingList
      items={items}
      onUpdateItem={() => {}}
      onDeleteItem={() => {}}
    />
  );

  expect(screen.getByText("Milk")).toBeInTheDocument();
  expect(screen.getByText("Bread")).toBeInTheDocument();
});
