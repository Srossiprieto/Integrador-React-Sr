// import { Categories } from "../../data/Categories";
import Category from "./Category";
import { CategoriesContainer } from "./CategoriesStyles";
import {useSelector} from "react-redux"

const Categories = () => {

 const {categories} = useSelector((state)=>state.categories)

  return (
    <CategoriesContainer>
      {categories.map((category)=>(
        <Category key={category.id} {...category}/>
        ))
      }
      </CategoriesContainer>
  );
    }
export default Categories;
