import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import './index.css'
import ProductPage from './pages/productpage'
import Shoppage from './pages/shoppage'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Admin from './pages/admin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
    const cart=useSelector(state=>state.cart)
      useEffect(()=>{
          localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])
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
