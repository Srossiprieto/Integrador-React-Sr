import { useRef } from 'react';
import TechCard from '../../components/Tech/TechCard';
import Categories from '../../components/Categories/Categories'; 
import TitleProduct from '../../components/TitleProduct/TitleProduct';


function Products() {
  return (
    <>
    
    <TitleProduct/>
    <Categories /> 
    <TechCard />
    </>
  )
}

export default Products;