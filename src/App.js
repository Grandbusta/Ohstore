import React from 'react';
import './index.css'
import ProductPage from './pages/productpage'
import Shop from './pages/shop'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navs/>
      <Route exact path='/'>
        <Shop/>
      </Route>
      <Route path='/p/:id' children={<ProductPage/>}>
      </Route>
      <Route path='/products'>
        <ProductPage/>
      </Route>
      <Route path='/cart'>
        <Cart/>
      </Route>
      <Route path='/checkout'>
        <Checkout/>
      </Route>
    </Router>  
  );
}

export default App;
