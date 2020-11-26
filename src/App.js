import React, { useEffect, useState } from 'react';
import './index.css'
import ProductPage from './pages/productpage'
import Shoppage from './pages/shoppage'
import Navs from './components/navbar'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Category from './pages/category'
import Login from './pages/Login';
import Register from './pages/register';
import AddProduct from './pages/AddProduct'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Notfound from './components/404';
import Dashboard from './components/DashboardNav';
import { baseLink } from './components/shared';
import { Spinner } from "react-bootstrap";


function App() {
  const [isAuth, ssAuth] = useState({ auth: false, details: {}, loading: true });
  // const [details, sDetails] = useState(null);
  const Authenticated = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuth.auth === true ? <Component {...props} /> : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )} />
  );
  const AuthLogin = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuth.auth === true ? <Redirect to={{
        pathname: '/dashboard',
        state: { from: props.location }
      }} /> : <Component {...props} />
    )} />
  )
  useEffect(() => {
    fetch(baseLink + 'users/auth', {
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("token")
      }
    })
      .then((resp) => {
        console.log(resp)
        return resp.json()
      })
      .then((resp) => {
        console.log(resp)
        if (!resp.success) {
          window.localStorage.removeItem('token')
          // return setErr(resp.message)
          // return ssAuth(prev => ({ ...prev, loading: true }));
          return;
        }
        else {
          ssAuth(prev => ({ ...prev, auth: resp.data.auth, details: resp.data.details, loading: true }));

          // sDetails(true);
          // console.log(isAuth);
          return;
        }
      });

    fetch(baseLink + 'products')
      .then((resp) => {
        return resp.json()
      })
      .then((res) => {
        if (res.success) {
          console.log(res);
          return ssAuth(prev => ({
            ...prev, products: res.data.products, loading: false
          }));

        }
        alert(res.message);
        console.log(res);
        ssAuth(prev => ({ ...prev, loading: false }));
        return;
      })
  }, [])
  return (<Router>

    {isAuth.loading ? <Spinner animation="grow" /> : <React.Fragment>
      <Navs auth={isAuth.auth} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shoppage />
        </Route>
        <Route exact path='/p/:name' children={<ProductPage />}>
        </Route>
        <Route exact path='/c/:category' children={<Category />}>
        </Route>
        {/* <Route path='/login'> */}
        <AuthLogin exact path='/login' component={() => <Login />} />
        {/* <Login /> */}
        {/* </Route> */}
        <Route path='/register'>
          <Register />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Authenticated exact path='/dashboard' component={() => <Dashboard details={isAuth.details} />} />
        <Authenticated exact path='/dashboard/add' component={() => <AddProduct />} />
        {/* <Route exact path='/dashboard'>
          <Dashboard />
        </Route> */}
        <Route path='*'>
          {/* <div>Not available</div> */}
          <Notfound />
        </Route>
      </Switch></React.Fragment>
    }</Router>
  );
}

export default App;
