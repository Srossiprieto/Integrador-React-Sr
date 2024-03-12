import CardsProducts from '../../components/Product/CardsProducts';
import TechCard from '../../components/Tech/TechCard';
import Categories from '../../components/Categories/Categories'; 

function Products() {
  return (
    <>
      <Categories /> 
      <TechCard />
      <CardsProducts />
    </>
  )
}

export default Products