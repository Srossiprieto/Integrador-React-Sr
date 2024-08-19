import { DropDownProvider } from './components/Navbar/DropDownContext';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/home/Home';
import Product  from './pages/products/Products';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import User from './pages/user/User';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DropDownProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/productos' element={<Product/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DropDownProvider>
  ) 
}

export default App;