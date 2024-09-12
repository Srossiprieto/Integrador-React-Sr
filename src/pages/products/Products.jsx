import { useRef } from 'react';
import TechCard from '../../components/Tech/TechCard';
import Categories from '../../components/Categories/Categories'; 
import { ContainerProducts } from './ProductsStyled';


function Products() {
  return (
    <>
      <ContainerProducts>
        <Categories textTitle={"Categorias"}/> 
        <TechCard textTitle={"Productos"}/>
      </ContainerProducts>
    </>
  )
}

export default Products;