import {Fragment} from 'react';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Body/Footer/Footer';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';


function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Cart className='see_the_cart' name='See The Cart' />
      <Footer />
    </Fragment>
  );
}

export default App;
