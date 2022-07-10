import {NavLink} from 'react-router-dom';
import React,{Fragment, useContext} from 'react';
import AuthContext from '../../store/AuthContext';
import CartButton from '../StoreComponent/Cart/CartButton';
import styles from './Header.module.css';
const Header=props=>{
    const ctx=useContext(AuthContext);
return (
    <Fragment>
    <header className={styles.header}>
        <div><NavLink activeClassName={styles.active} className={styles.home} to='/home'>HOME</NavLink></div>
        <div><NavLink activeClassName={styles.active} className={styles.store} to='/store'>STORE</NavLink></div>
        <div><NavLink activeClassName={styles.active} className={styles.about} to='/about'>ABOUT</NavLink></div>
        <div><NavLink activeClassName={styles.active} className={styles.contact} to='/contact'>CONTACT US</NavLink></div>
        <div className={styles.cart}>
            {props.cart && <CartButton 
                className={styles.buttons} 
                name='Cart' 
                quantity={ctx.totalQuantity} 
                cartshow={props.cartshow}
            />}
        </div>
    </header>
    
    <div className={`${styles.generics} ${props.generics}`}>
        <h2>The Generics</h2>
        {props.children}
    </div>
    </Fragment>
);
}

export default Header;