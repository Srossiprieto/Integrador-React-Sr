import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategory } from '../../redux/categories/categoriesSlice';
import Category from './Category';
import { CategoriesContainer, SelectAllButton } from './CategoriesStyles';

const Categories = ({ textTitle }) => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CategoriesContainer>
      <h2>{textTitle}</h2>
      <SelectAllButton
        onClick={(e) => {
          e.stopPropagation(); // Evita que el evento se propague
          dispatch(selectCategory(null)); // Deselecciona todas las categorías
        }}
        whileTap={{ scale: 0.95 }}
      >
        Todas
      </SelectAllButton>
      {categories.map((category) => (
        <Category key={category._id} {...category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;