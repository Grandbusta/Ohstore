import React, { useEffect, useState } from 'react';
import './index.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ProductPage from './pages/productpage';
import Shoppage from './pages/shoppage';
import Navs from './components/navbar';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/register';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import { product } from './assets/data';
import Notfound from './components/404';
import Dashboard from './components/DashboardNav';
import { baseLink } from './components/shared';

function App() {
  const [isAuth, ssAuth] = useState({
    auth: false, details: {}, loading: true, products: product,
  });
  // const [prood, sprood] = useState(null);
  const Authenticated = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isAuth.auth === true && !isAuth.loading ? <Component {...props} /> : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
      )}
    />
  );
  const AuthLogin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isAuth.auth === true && !isAuth.loading ? (
          <Redirect to={{
            pathname: '/dashboard',
            state: { from: props.location },
          }}
          />
        ) : <Component {...props} />
      )}
    />
  );
  useEffect(() => {
    fetch(`${baseLink}users/auth`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    })
      .then((resp11) => {
        console.log(resp11);
        return resp11.json();
      })
      .then((resp1) => {
        fetch(`${baseLink}products`)
          .then((resp2) => resp2.json())
          .then((res) => {
            if (res.success) {
              console.log(res);
              if (res.data.products.length > 0 && typeof res.data.products[0] === 'object') {
                const pro = res.data.products.map((p, i) => {
                  const prod = {};
                  prod.id = i;
                  prod.name = p.title;
                  prod.content = p.content;
                  prod.link = p._id;
                  prod.imageUrl = p.featured_imgurl[0].url;
                  prod.originalPrice = p.selling_price;
                  prod.discountPrice = p.bonus_price;
                  prod.user = `${p.User.firstName} ${p.User.lastName}`;
                  return prod;
                });
                console.log(pro, 'products');
                // sprood(pro);
                console.log(resp1);
                if (!resp1.success) {
                  window.localStorage.removeItem('token');
                  // return setErr(resp.message)
                  // return ssAuth(prev => ({
                  //   ...prev, products: product, loading: false
                  // }));
                  console.log('running');
                  return ssAuth((prev) => ({
                    ...prev, auth: false, products: pro, loading: false,
                  }));
                }

                console.log('running');

                return ssAuth((prev) => ({
                  ...prev, auth: resp1.data.auth, products: pro, details: resp1.data.details, loading: false,
                }));

                // sDetails(true);
                // console.log(isAuth);
              }

              if (!resp1.success) {
                window.localStorage.removeItem('token');
                // return setErr(resp.message)
                // return ssAuth(prev => ({
                //   ...prev, products: product, loading: false
                // }));
                console.log('running');

                return ssAuth((prev) => ({
                  ...prev, auth: false, products: isAuth.products, loading: false,
                }));
              }

              console.log('running');

              return ssAuth((prev) => ({
                ...prev, auth: resp1.data.auth, products: isAuth.products, details: resp1.data.details, loading: false,
              }));

              // sDetails(true);
              // console.log(isAuth);
            }
            alert('Error In Internet Connection ');
            console.log(res);

            return ssAuth((prev) => ({
              ...prev, auth: false, products: isAuth.products, loading: false,
            }));
          })
          .catch((err) => {
            alert('An error occured while fetching');
            console.log(err);
            return ssAuth((prev) => ({ ...prev, loading: false }));
          });
      })
      .catch((err) => {
        alert('An error occured while fetching');
        console.log(err);
        return ssAuth((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  // useEffect(() => {
  //  return ssAuth(prev => ({
  //     ...prev, products: prood, loading: false
  //   }));  }, [prood])
  console.log(isAuth);
  return (
    <Router>
      {isAuth.loading ? <Spinner className="spinner" animation="grow" /> : (
        <>
          <Navs auth={isAuth.auth} />
          <Switch>
            <Route exact path="/">
              <Home products={isAuth.products} />
            </Route>
            <Route path="/shop">
              <Shoppage products={isAuth.products} />
            </Route>
            <Route exact path="/p/:name" children={<ProductPage products={isAuth.products} />} />
            {/* <Route exact path='/c/:category' children={<Category />}>
          </Route> */}
            {/* <Route path='/login'> */}
            <AuthLogin exact path="/login" component={() => <Login ssAuth={ssAuth} />} />
            {/* <Login /> */}
            {/* </Route> */}
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Authenticated exact path="/dashboard" component={() => <Dashboard details={isAuth.details} products={isAuth.products} />} />
            <Authenticated exact path="/dashboard/add" component={() => <AddProduct />} />
            <Authenticated path="/dashboard/edit/:prolink" component={() => <EditProduct products={isAuth.products} />} />

            {/* <Route exact path='/dashboard'>
          <Dashboard />
        </Route> */}
            <Route path="*">
              {/* <div>Not available</div> */}
              <Notfound />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
