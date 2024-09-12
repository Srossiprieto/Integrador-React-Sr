import { CategoriesContainer, SelectAllButton } from "./CategoriesStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import Category from "./Category";

const Categories = ({ textTitle }) => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch(); // traemos dispatch del store con useDispatch

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
        <Category key={category.id} {...category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;