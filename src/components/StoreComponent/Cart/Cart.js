
import { useContext} from 'react';
import AuthContext from '../../../store/AuthContext';
import Model from '../UI/Model';
import styles from './Cart.module.css';
import CartList from './CartList';

    
const Cart=props=>{
   const ctx=useContext(AuthContext);

    const cartitem=ctx.items.map(item=>(
    <CartList 
    key={Math.random().toString()}
    id={item._id}
    title={item.title}
    src={item.imageUrl}
    price={item.price}
    quantity={item.quantity}
    />));
    return (
        <Model onCloseCart={props.hidecart}>
            <div className={styles.cartname}>
            <label >CART</label>
            <button onClick={props.hidecart}>X</button>
            </div>
        <ul className={styles.title}>
            <li className={styles.title1}>ITEM</li>
            <li className={styles.title2}>PRICE</li>
            <li className={styles.title3}>QUANTITY</li>
        </ul>
        <ul className={styles.border}>
            <li ><hr className={styles.line1}/></li>
            <li ><hr className={styles.line2}/></li>
            <li ><hr className={styles.line3}/></li>
        </ul>
        <div >
            {cartitem}
        </div>
        <div className={styles.cartbutton}>
            <ul>
                <li className={styles.totallabel}>Total</li>
                <li className={styles.totalamount}>${ctx.total}</li>
            </ul>
            <button>PURCHASE</button>
        </div>
        </Model>
    );
};

export default Cart;