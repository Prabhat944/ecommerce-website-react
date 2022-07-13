import { Fragment } from "react";
import Body from "../components/StoreComponent/Body";
import CartButton from '../components/StoreComponent/Cart/CartButton';
import styles from './Store.module.css';

const Store=props=>{

    return (
        <Fragment>
             <Body />
              <div className={styles.cartblock}>
               <CartButton className={styles.seecart} name='See The Cart'  cartshow={props.cartshow} />
              </div>
        </Fragment>
    );
};

export default Store;