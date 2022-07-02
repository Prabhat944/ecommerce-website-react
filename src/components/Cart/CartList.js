import { Fragment, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import styles from './CartList.module.css';


const CartList=(props)=>{
    const ctx=useContext(AuthContext);
    const removeItem=event=>{
        event.preventDefault();
        ctx.deleteItem(props.title);
    }
    
     return (<Fragment>
        <ul className={styles.ul}>
            <li className={styles.img}><img src={props.src} alt={props.title}/></li>
            <li className={styles.title}>{props.title}</li>
            <li className={styles.price}>{props.price}</li>
            <li><input  
            className={styles.quantity} 
            defaultValue={props.quantity} 
            /></li>
            <li className={styles.remove}><button onClick={removeItem} >REMOVE</button></li>
        </ul>
        <ul className={styles.border}>
            <li className={styles.line1}></li>
            <li className={styles.line2}></li>
            <li className={styles.line3}></li>
        </ul>
        </Fragment>)

};




export default CartList;