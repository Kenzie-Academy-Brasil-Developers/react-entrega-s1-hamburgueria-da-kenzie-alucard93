import { useState, useEffect } from 'react';
import Global from './styles/global';
import api from './services/api';
import Cart from './components/Cart';
// import Header from './components/Header';
// import CardEmpty from './components/CardEmpty';
import './App.css';



function App() {
  
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
// const [currentSale, setCurrentSale] = useState([])
// const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    api.get("/products")
    .then(response => setProducts(response.data))
    
  }, []);

  return (
    <div className="App">
      <Global />
      {/* <CardEmpty/> */}
      {/* <Header/> */}
      <Cart/>
      
    </div>
  );
}

export default App;
