import { CardCategories } from './CategoriesStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Category = ({ name, _id }) => {
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <CardCategories
      selected={_id === selectedCategory} // si la categoria es igual a la categoria seleccionada, le damos un estilo
      onClick={() => dispatch(selectCategory(_id))} // al hacer click en la categoria, disparamos la action selectCategory con el valor de la categoria (el payload es _id)
      whileTap={{ scale: 0.95 }} // animacion al hacer click
    >
      <h3>{name}</h3>
    </CardCategories>
  );
};

export default Category;