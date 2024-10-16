import React, { useState, useEffect } from 'react';
import { AdminContainer, Table, Button, Form, Input } from './AdminPageStyles';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const {user} = useAuth() 
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
      await api.put(`/api/products/${editingProduct._id}`, editingProduct);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await api.post('/api/products', newProduct);
      setNewProduct({ name: '', price: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
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
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <Button onClick={handleAdd}>Add Product</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
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
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  />
                ) : (
                  product.price
                )}
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