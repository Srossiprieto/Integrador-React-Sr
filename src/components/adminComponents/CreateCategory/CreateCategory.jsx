import React, { useState } from "react";
import { createCategory } from "../../../api/api";
import { Form, Input, Button } from "./CreateCategoryStyled";

function CreateCategory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name) {
      setMessage("Por favor, completa el nombre de la categoría.");
      setLoading(false);
      return;
    }

    try {
      await createCategory(name);
      setMessage("Categoría creada exitosamente.");
      setName("");
      setLoading(false);
    } catch (err) {
      setError("Error creando categoría: " + err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <h3>Create Category</h3>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {message && <div style={{ color: 'green' }}>{message}</div>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Category Name"
          value={name}
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Add Category"}
        </Button>
      </Form>
    </>
  );
}

export default CreateCategory;