import { Fragment } from "react";
import Body from "../components/StoreComponent/Body";
import Header from "../components/CommonComponent/Header";
import CartButton from '../components/StoreComponent/Cart/CartButton';
import Footer from '../components/CommonComponent/Footer';
import styles from './Store.module.css';

const Store=props=>{

    return (
        <Fragment>
             <Header cart={true} cartshow={props.cartshow} />
             <Body />
              <div className={styles.cartblock}>
               <CartButton className={styles.seecart} name='See The Cart'  cartshow={props.cartshow} />
              </div>
            <Footer />
        </Fragment>
    );
};

export default Store;