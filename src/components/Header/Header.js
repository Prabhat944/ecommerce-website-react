import React,{Fragment} from 'react';
import CartButton from '../Cart/CartButton';
import styles from './Header.module.css';
const Header=props=>{
return (
    <Fragment>
    <header className={styles.header}>
        <div className={styles.headeritem} >
        <ul className={styles.headeritemlist}>
        <li><a href={props.home}>HOME</a></li>
        <li><a href={props.store}>STORE</a></li>
        <li><a href={props.about}>ABOUT</a></li>
        </ul>
        </div>
        <div className={styles.cart}>
        <CartButton className={styles.buttons} name='Cart' quantity='0' cartshow={props.cartshow}/>
        </div>
    </header>
    <div className={styles.heading}>The Generics</div>
    </Fragment>
);
}

export default Header;