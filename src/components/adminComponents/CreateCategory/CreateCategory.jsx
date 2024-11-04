import React, { useState } from "react";
import { useProduct } from "../../../context/ProductContext";
import { Form, Input, Button } from "./CreateCategoryStyled";

function CreateCategory() {
  const { createCategory } = useProduct();
  const [categoryName, setCategoryName] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!categoryName) newErrors.name = "Name is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Crear categoría
    createCategory({ name: categoryName })
      .then(() => {
        // Limpiar formulario
        setCategoryName("");
        setErrors({});
      })
      .catch((error) => {
        console.error("Error al crear la categoría:", error);
        setErrors({ submit: "Error creating category" });
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={categoryName}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      {errors.submit && <div style={{ color: 'red' }}>{errors.submit}</div>}
      <Button type="submit">Create Category</Button>
    </Form>
  );
}

export default CreateCategory;