import { useState, useEffect } from 'react';
import Global from './styles/global';
import api from './services/api';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductsList';
import CardEmpty from './components/CardEmpty';

import './App.css';

function App() {

const [products, setProducts] = useState([]);
// const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([])
// const [cartTotal, setCartTotal] = useState(0)


useEffect(() => {
  api
    .get("/products")
    .then((response) => setProducts(response.data));
}, []);


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
  console.log("foi")
}


  return (
    <div className="App">
      <Global />
      
      <Header/>
      <ProductList 
      products={products}
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
      
    </div>
  );
}

export default App;
