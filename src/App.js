import {Route} from 'react-router-dom';
import React, { useState } from 'react';
import Cart from './components/StoreComponent/Cart/Cart';
import ContextProvider from './store/ContextProvider';
import Store from './pages/Store';
import About from './pages/About';
import Home from './pages/Home';


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
      {cartShow && <Cart hidecart={CartHideHandler}/>}

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/store">
        <Store cartshow={CartShowHandler} />
      </Route>
    
      <Route path="/about">
        <About />
      </Route>

    </ContextProvider>
  );
}

export default App;
