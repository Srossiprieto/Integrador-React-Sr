import { BorderDecoration, CardCategories } from "./CategoriesStyles";
import {useDispatch,useSelector} from "react-redux";


// puse el = "" para que no tire error 

export const Category = ({title,category}) => {
  const {selectedCategory = ""} = useSelector((state)=>state.categories);
  const dispatch =useDispatch();

  return (
    <CardCategories
      selected={category===selectedCategory}
      onClick={(e) => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategories>
  );
};

export default Category;