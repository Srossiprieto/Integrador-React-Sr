import React, { useState } from "react";
import { Form, Input, Button } from "./CreateProductStyled";

function CreateProduct({ handleAdd }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  };

  return (
    <>
      <h3>Create Product</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="category"
          placeholder="Product Category"
          value={newProduct.category}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Product Image URL"
          value={newProduct.image}
          onChange={handleChange}
        />
        <Button type="submit">Add Product</Button>
      </Form>
    </>
  );
}

export default CreateProduct;
