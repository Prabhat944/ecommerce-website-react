import {Redirect, Route,Switch} from 'react-router-dom';
import React, { useState } from 'react';
import Cart from './components/StoreComponent/Cart/Cart';
import ContextProvider from './store/ContextProvider';
import Store from './pages/Store';
import About from './pages/About';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ProductDetail from './components/StoreComponent/ProductDetail/ProductDetail';
import Login from './pages/Login';


const App=() => {
const [cartShow,setCartShow] = useState(false);
const CartShowHandler=()=>{
  setCartShow(true);
};
const CartHideHandler=()=>{
  setCartShow(false);
};
  return (
    <ContextProvider >
      {cartShow && <Cart hidecart={CartHideHandler} />}
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/store" exact>
        <Store cartshow={CartShowHandler} />
      </Route>
    
      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <ContactUs />
      </Route>

      <Route path='/store/login' exact>
        <Login cartShow={CartShowHandler}/>
      </Route>
      
      <Route path='/store/:productId'>
        <ProductDetail cartshow={CartShowHandler}/>
      </Route>
       
      
      </Switch>
    </ContextProvider>
  );
}

export default App;
