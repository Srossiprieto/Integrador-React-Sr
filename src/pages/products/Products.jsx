import CardsProducts from '../../components/Product/CardsProducts';
import TechCard from '../../components/Tech/TechCard';
import Categories from '../../components/Categories/Categories'; 
import TitleProduct from '../../components/TitleProduct/TitleProduct';
function Products() {
  return (
    <>
      <TitleProduct/>
      <Categories /> 
      <TechCard />
      <CardsProducts />
    </>
  )
}

export default Products