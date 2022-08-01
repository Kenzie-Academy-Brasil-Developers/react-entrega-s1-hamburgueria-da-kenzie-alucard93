import { useState, useEffect } from 'react';
import Global, { Container } from './styles/global';
import api from './services/api';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductsList';
import CardEmpty from './components/CardEmpty';

import './App.css';

function App() {

const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([...products]);
const [currentSale, setCurrentSale] = useState([])
const [inputValue, setInputValue] = useState("");

useEffect(() => {
  api
    .get("/products")
    .then((response) => { 
      setProducts(response.data)
    })
}, []);

useEffect(() => {
  if (inputValue === "") setFilteredProducts(products);
}, [inputValue]);

useEffect(() => {
  setFilteredProducts([...products]);
}, [products]);

const showProducts = (iptValue) => {
  setFilteredProducts(
    products.filter(
      (e) =>
        e.name.toLowerCase().includes(iptValue.toLowerCase()) ||
        e.category.toLowerCase().includes(iptValue.toLowerCase())
    )
  );
};


const handleClick = (id) => {
  const item = products.find((item) => item.id === id);
  if (!currentSale.includes(item)) {
    return setCurrentSale([...currentSale, item]);
  } else {
    alert("Item já se encontra no carrinho")
  }
}

const removeProduct = (id) => {
  const item = currentSale.filter(product => product.id !== id)
  setCurrentSale(item)
}


  return (
    <div className="App">
      <Global />
      
      <Header
      setInput={setInputValue}
      showProducts={showProducts}
      valorInput={inputValue} 
      />
      <Container>
      <ProductList 
      products={filteredProducts}
      handleClick={handleClick}
      />
      { currentSale.length === 0 
        ? 
      (
        <CardEmpty/> )
        :
      ( <Cart 
        currentSale={currentSale} 
        setCurrentSale={setCurrentSale}
        removeProduct={removeProduct}
        /> )
      }
      </Container>
    </div>
  );
}

export default App;
