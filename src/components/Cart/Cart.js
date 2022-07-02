
import Model from '../UI/Model';
import styles from './Cart.module.css';
import CartList from './CartList';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const Cart=props=>{

    const cartitem=cartElements.map(item=>(
    <CartList 
    key={Math.random().toString()}
    title={item.title}
    src={item.imageUrl}
    price={item.price}
    quantity={item.quantity}
    />));
    return (
        <Model>
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
            <li className={styles.line1}></li>
            <li className={styles.line2}></li>
            <li className={styles.line3}></li>
        </ul>
        <div >
            {cartitem}
        </div>
        <div className={styles.cartbutton}>
            <ul>
                <li className={styles.totallabel}>Total</li>
                <li className={styles.totalamount}>$220</li>
            </ul>
            <button>PURCHASE</button>
        </div>
        </Model>
    );
};

export default Cart;