import React from "react";
import { useProduct } from "../../../context/ProductContext";
import { List, ListItem, Button } from "./CategoryListStyled";

function CategoryList() {
  const { categories, deleteCategory } = useProduct();

  const handleDelete = (id) => {
    deleteCategory(id);
  };

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category._id}>
          {category.name}
          <Button onClick={() => handleDelete(category._id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;