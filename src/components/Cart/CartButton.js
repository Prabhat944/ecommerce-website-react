import styles from './CartButton.module.css';
const Cart =props=>{
    return(
        <button className={`${styles.cart} ${props.className}`} onClick={props.cartshow}>{props.name} {props.quantity}</button>
    )
};

export default Cart;