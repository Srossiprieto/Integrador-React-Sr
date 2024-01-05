import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import CardsProducts from './components/Products/CardsProducts';


function App() {


  return (
    <>  
      <Navbar/> 
      <Layout>
        <Hero/>
        <CardsProducts/>
      </Layout>
      <Footer/>
    </>
  ) 
}

export default App
