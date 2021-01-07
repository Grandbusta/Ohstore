import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import './index.css'
import ProductPage from './pages/productpage'
import Shoppage from './pages/shoppage'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import OrderPlaced from './components/orderPlaced'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
    const cart=useSelector(state=>state.cart)
    const data=useSelector(state=>state.Login)
      useEffect(()=>{
          localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])
      useEffect(()=>{
        localStorage.setItem('token',JSON.stringify(data.token))
      },[data.token])
  return (
    <Router>
      <Navs/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/success'>
          <OrderPlaced/>
        </Route>
        <Route path='/signup'>
          <Signup/>
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
        <Route path='*'>
          <div>Not available</div>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
