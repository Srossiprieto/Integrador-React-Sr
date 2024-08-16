import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import CardsProducts from '../../components/Product/CardsProducts';
import ContactForm from '../../components/ContactForm/ContactForm';
function Home() {
  return (
    <>
        <Hero />
        <CardsProducts />
        <Layout />
        <ContactForm />

    </>
  )
}

export default Home
