import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct, updateProduct, createProduct, getCategories } from "../../../api/api";
import { TableContainer, StyledTable } from "./ListProductsStyled";
import CreateProductForm from "../CreateProduct/CreateProductForm";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleUpdateProduct = async (id, updatedProductData) => {
    try {
      const updatedProduct = await updateProduct(id, updatedProductData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? { ...product, ...updatedProductData, category: categories.find(cat => cat._id === updatedProductData.category) } : product
        )
      );
      setEditingProductId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCreateProduct = async (newProductData) => {
    try {
      const response = await createProduct(newProductData);
      const createdProduct = response.data;
      const category = categories.find(cat => cat._id === createdProduct.category);
      setProducts((prevProducts) => [...prevProducts, { ...createdProduct, category }]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category._id,
    });
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    const updatedProductData = {
      ...editData,
      price: parseFloat(editData.price), // Asegúrate de que el precio sea un número
    };
    handleUpdateProduct(editingProductId, updatedProductData);
  };

  return (
    <div>
      <h1>Products</h1>
      {loading ? <p>Loading...</p> : (
        <>
          <CreateProductForm onCreate={handleCreateProduct} />
          <TableContainer>
            <StyledTable>
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
                    {editingProductId === product._id ? (
                      <>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="description"
                            value={editData.description}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="price"
                            value={editData.price}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <select
                            name="category"
                            value={editData.category}
                            onChange={handleChange}
                          >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <img src={product.image} alt={product.name} width="50" />
                        </td>
                        <td>
                          <button onClick={handleSave}>Save</button>
                          <button onClick={handleCancelEdit}>Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category?.name || 'No category'}</td>
                        <td>
                          <img src={product.image} alt={product.name} width="50" />
                        </td>
                        <td>
                          <button onClick={() => handleEdit(product)}>Edit</button>
                          <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default ListProducts;
