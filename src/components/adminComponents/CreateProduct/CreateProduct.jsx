import React, { useState, useEffect } from 'react';
import { createProduct, getCategories } from '../../../api/api';
import { Form, Input, Button, Select } from './CreateProductStyled';

function CreateProduct({ onProductAdded }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        setError('Error fetching categories: ' + error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.category || !newProduct.image) {
      alert('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    try {
      const createdProduct = await createProduct(newProduct);
      onProductAdded(createdProduct);

      setNewProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });

      setLoading(false);
    } catch (err) {
      setError('Error creando producto: ' + err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <h3>Create Product</h3>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
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
        <Select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          name="image"
          placeholder="Product Image URL"
          value={newProduct.image}
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Add Product'}
        </Button>
      </Form>
    </>
  );
}

export default CreateProduct;