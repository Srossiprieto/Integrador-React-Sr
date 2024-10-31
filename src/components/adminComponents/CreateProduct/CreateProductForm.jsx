import React, { useState, useEffect } from "react";
import { getCategories } from "../../../api/api";
import { Form, Input, Select, Button } from "./CreateProductStyled";

function CreateProductForm({ onCreate }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newProduct.name) newErrors.name = "Name is required";
    if (!newProduct.description) newErrors.description = "Description is required";
    if (!newProduct.price) newErrors.price = "Price is required";
    if (!newProduct.category) newErrors.category = "Category is required";
    if (!newProduct.image) newErrors.image = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const productData = {
      ...newProduct,
      price: parseFloat(newProduct.price), // Asegúrate de que el precio sea un número
    };
    onCreate(productData);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
    setErrors({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={newProduct.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
        />
        {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
      </div>
      <div>
        <Input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
        />
        {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
      </div>
      <div>
        <Select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </Select>
        {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}
      </div>
      <div>
        <Input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
        />
        {errors.image && <span style={{ color: 'red' }}>{errors.image}</span>}
      </div>
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default CreateProductForm;