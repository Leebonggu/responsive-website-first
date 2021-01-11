import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite..." data={productData}/>
      <Feature />
      <Products heading="Choose Sweet Desert..." data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
