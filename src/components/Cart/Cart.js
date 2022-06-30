import styles from './Cart.module.css';
const Cart =props=>{
    return(
        <button className={`${styles.cart} ${props.className}`}>{props.name} {props.quantity}</button>
    )
};

export default Cart;