import React from 'react';
import './index.css'
import ProductPage from './pages/productpage'
import Shoppage from './pages/shoppage'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Category from './pages/category'
import Admin from './pages/admin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navs/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/shop'>
          <Shoppage/>
        </Route>
        <Route path='/p/:name' children={<ProductPage/>}>
        </Route>
        {/* <Route path='/c/:category' children={<Category/>}>
        </Route> */}
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='*'>
          <div>Not available</div>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
