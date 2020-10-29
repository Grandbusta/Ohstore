import React from 'react';
import './index.css'
import ProductPage from './pages/productpage'
import Shop from './pages/shop'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Category from './pages/category'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navs/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/shop'>
        <Shop title='Shop'/>
      </Route>
      <Route path='/p/:name' children={<ProductPage/>}>
      </Route>
      <Route path='/c/:category'>
        <Category/>
      </Route>
      <Route path='/cart'>
        <Cart/>
      </Route>
      <Route path='/checkout'>
        <Checkout/>
      </Route>
      <Route path='*'>
        <div>Not available</div>
      </Route>
    </Router>  
  );
}

export default App;
