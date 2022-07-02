import { Component, Fragment } from "react";
import styles from './CartList.module.css';

class CartList extends Component{
render(){
     return (<Fragment>
        <ul className={styles.ul}>
            <li className={styles.img}><img src={this.props.src} alt={this.props.title}/></li>
            <li className={styles.title}>{this.props.title}</li>
            <li className={styles.price}>{this.props.price}</li>
            <li className={styles.quantity}>{this.props.quantity}</li>
            <li className={styles.remove}><button onClick={this.props.remove} >REMOVE</button></li>
        </ul>
        <ul className={styles.border}>
            <li className={styles.line1}></li>
            <li className={styles.line2}></li>
            <li className={styles.line3}></li>
        </ul>
        </Fragment>)

};

}


export default CartList;