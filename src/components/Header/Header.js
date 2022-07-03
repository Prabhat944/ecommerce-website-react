import {NavLink} from 'react-router-dom';
import React,{Fragment, useContext} from 'react';
import AuthContext from '../../store/AuthContext';
import CartButton from '../Cart/CartButton';
import styles from './Header.module.css';
const Header=props=>{
    const ctx=useContext(AuthContext);
return (
    <Fragment>
    <header className={`${styles.header} ${props.header}`}>
        <div className={styles.headeritem} >
        <ul className={styles.headeritemlist}>
        <li><NavLink activeClassName={styles.active} to='/home'>HOME</NavLink></li>
        <li><NavLink activeClassName={styles.active} to='/store'>STORE</NavLink></li>
        <li><NavLink activeClassName={styles.active} to='/about'>ABOUT</NavLink></li>
        </ul>
        </div>
        <div className={styles.cart}>
        {props.cart && <CartButton className={styles.buttons} name='Cart' quantity={ctx.totalQuantity} cartshow={props.cartshow}/>}
        </div>
    </header>
    <div className={`${styles.heading} ${props.generics}`}><h2>The Generics</h2>{props.children}</div>
    </Fragment>
);
}

export default Header;