import {Redirect, Route,Switch} from 'react-router-dom';
import React, { useState ,Suspense} from 'react';
import Cart from './components/StoreComponent/Cart/Cart';
// import Store from './pages/Store';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import ProductDetail from './components/StoreComponent/ProductDetail/ProductDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Layout from './components/CommonComponent/Layout';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import styles from './App.module.css';

const Home=React.lazy(()=> import('./pages/Home'));
const Store=React.lazy(()=> import('./pages/Store'));
const About=React.lazy(()=> import('./pages/About'));
const ContactUs=React.lazy(()=> import('./pages/ContactUs'));
const ProductDetail=React.lazy(()=> import('./components/StoreComponent/ProductDetail/ProductDetail'));

const App=() => {
const ctx=useContext(AuthContext);
const [cartShow,setCartShow] = useState(false);
const CartShowHandler=()=>{
  setCartShow(true);
};
const CartHideHandler=()=>{
  setCartShow(false);
};
  return (
    
      <Layout cartshow={CartShowHandler}>
      
      {cartShow && <Cart hidecart={CartHideHandler} />}
      <Suspense fallback={<div className={styles.loader}></div>}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route> 
        <Route path="/home" exact>
          <Home />
        </Route>
       
      <Route path="/store" exact>
        {ctx.isLogin ? (<Store cartshow={CartShowHandler} />) : (<Login cartShow={CartShowHandler}/>)}
      </Route>
    
      <Route path="/about" exact>
        <About />
      </Route>

      <Route path="/contact" exact>
        <ContactUs />
      </Route>

      <Route path='/store/login/profile' exact>
        <Profile cartShow={CartShowHandler}/>
      </Route>
      
      <Route path='/store/login' exact>
        <Login cartShow={CartShowHandler}/>
      </Route>
      
      <Route path='/store/:productId'>
        <ProductDetail cartshow={CartShowHandler}/>
      </Route>

      </Switch>
      </Suspense>
      </Layout>
    
  );
}

export default App;
