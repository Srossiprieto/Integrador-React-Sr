import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct, updateProduct, getCategories } from "../../../api/api";
import { TableContainer, StyledTable } from "./ListProductsStyled";
import CreateProduct from "../CreateProduct/CreateProduct";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [categories, setCategories] = useState([]); // Lista de categorías

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    } catch (error) {
      setError("Error fetching categories: " + error.message);
    }
  };

  const handleEditClick = (product) => {
    setEditingProductId(product._id);
    setEditData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category._id, // Guardar el ID de la categoría
      image: product.image,
    });
  };

  const handleSaveClick = async (productId) => {
    if (!editData.image.startsWith("http")) {
      alert("La URL de la imagen no es válida");
      return;
    }

    try {
      if (!editData.category) {
        alert("Por favor, selecciona una categoría.");
        return;
      }

      const updatedProductData = {
        ...editData,
        name: editData.name.trim(),
        description: editData.description.trim(),
        price: parseFloat(editData.price),
        category: editData.category,
      };

      await updateProduct(productId, updatedProductData);

      // Buscar el nombre de la categoría seleccionada
      const updatedCategory = categories.find(
        (category) => category._id === editData.category
      );

      // Actualizar el estado de los productos con el nombre de la categoría
      setProducts(
        products.map((product) =>
          product._id === productId
            ? { ...product, ...updatedProductData, category: updatedCategory }
            : product
        )
      );

      setEditingProductId(null);
    } catch (error) {
      setError("Error updating product: " + error.message);
    }
  };

  const handleDeleteClick = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      setError("Error deleting product: " + error.message);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories(); // Obtener las categorías disponibles
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <CreateProduct onProductAdded={handleProductAdded} />
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Imagen</th>
              <th>Acciones</th>
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
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="image"
                        value={editData.image}
                        onChange={handleChange}
                      />
                      <img src={editData.image} alt={editData.name} width="50" />
                    </td>
                    <td>
                      <button onClick={() => handleSaveClick(product._id)}>Guardar</button>
                      <button onClick={() => setEditingProductId(null)}>Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                    <td>
                      <img src={product.image} alt={product.name} width="50" />
                    </td>
                    <td>
                      <button onClick={() => handleEditClick(product)}>Editar</button>
                      <button onClick={() => handleDeleteClick(product._id)}>Eliminar</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </div>
  );
}

export default ListProducts;