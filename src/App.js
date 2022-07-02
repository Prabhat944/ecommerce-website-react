import React, { Fragment, useState } from 'react';
import styles from './App.module.css';
import Body from './components/Body/Body';
import Footer from './components/Body/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartButton from './components/Cart/CartButton';
import Header from './components/Header/Header';


const App=() => {
const [cartShow,setCartShow] = useState(false);
const CartShowHandler=()=>{
  setCartShow(true);
};
const CartHideHandler=()=>{
  setCartShow(false);
};
  return (
    <Fragment >
      {cartShow && <Cart hidecart={CartHideHandler}/>}
      <Header cartshow={CartShowHandler}/>
      <main>
      <Body />
      <div className={styles.cartblock}>
      <CartButton className={styles.seecart} name='See The Cart'  cartshow={CartShowHandler} />
      </div>
      <Footer />
      </main>
    </Fragment>
  );
}

export default App;
