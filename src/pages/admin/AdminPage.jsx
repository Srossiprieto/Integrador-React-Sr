import React, { useState, useEffect } from 'react';
import { AdminContainer, Table, Button, Form, Input } from './AdminPageStyles';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', category: '', image: '' });

  const { user } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/products');
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('Error: Expected an array of products');
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async () => {
    try {
      if (!editingProduct.name || !editingProduct.description || !editingProduct.price || !editingProduct.category || !editingProduct.image) {
        console.error('All fields are required');
        return;
      }

      await api.put(`/api/products/${editingProduct._id}`, {
        ...editingProduct,
        price: Number(editingProduct.price), // Convertir el precio a número
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        console.error('Error updating product:', error.response.data.errors.join(', '));
      } else {
        console.error('Error updating product:', error.message);
      }
    }
  };

  const handleAdd = async () => {
    try {
      if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.category || !newProduct.image) {
        console.error('All fields are required');
        return;
      }

      await api.post('/api/products', {
        ...newProduct,
        price: Number(newProduct.price), // Convertir el precio a número
      });
      setNewProduct({ name: '', description: '', price: '', category: '', image: '' });
      fetchProducts();
    } catch (error) {
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        console.error('Error adding product:', error.response.data.errors.join(', '));
      } else {
        console.error('Error adding product:', error.message);
      }
    }
  };

  return (
    <AdminContainer>
      <h1>Admin Page</h1>
      <Form>
        <Input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Product Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Product Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <Button onClick={handleAdd}>Add Product</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                {editingProduct && editingProduct._id === product._id ? (
                  <Input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === product._id ? (
                  <Input
                    type="text"
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === product._id ? (
                  <Input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === product._id ? (
                  <Input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  />
                ) : (
                  product.category
                )}
              </td>
              <td>
                <img style={{height: 100}} src={product.image} alt={product.name} />
              </td>
              <td>
                {editingProduct && editingProduct._id === product._id ? (
                  <Button onClick={handleUpdate}>Update</Button>
                ) : (
                  <Button onClick={() => handleEdit(product)}>Edit</Button>
                )}
                <Button onClick={() => handleDelete(product._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminContainer>
  );
}

export default AdminPage;