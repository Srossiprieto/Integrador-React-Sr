import { CardCategories } from "./CategoriesStyles";
import {useDispatch,useSelector} from "react-redux";

import { selectCategory } from "../../redux/categories/categoriesSlice";
 

export const Category = ({title,category}) => {
  const {selectedCategory} = useSelector((state)=>state.categories); // traemos categories del store con el useSelector
  const dispatch = useDispatch(); // traemos dispatch del store con useDispatch

  return (
    <>
    <CardCategories
      selected={category===selectedCategory} // si la categoria es igual a la categoria seleccionada, le damos un estilo
      onClick={(e) => dispatch(selectCategory(category))} // al hacer click en la categoria, disparamos la action selectCategory con el valor de la categoria (el payload es category)
      whileTap={{ scale: 0.95 }} // animacion al hacer click
    >
      <h2>{title}</h2>
    </CardCategories>
    </>
  );
};

export default Category;