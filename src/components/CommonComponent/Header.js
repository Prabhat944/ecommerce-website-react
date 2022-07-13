import {NavLink} from 'react-router-dom';
import React,{Fragment, useContext} from 'react';
import AuthContext from '../../store/AuthContext';
import CartButton from '../StoreComponent/Cart/CartButton';
import styles from './Header.module.css';
const Header=props=>{
    const ctx=useContext(AuthContext);
    const AuthHandler=()=>{
        if(ctx.isLogin){
            ctx.LogOut();
        }
    }
return (
    <Fragment>
    <header className={styles.header}>
        <div className={styles.logo}>
            <h2>REACT_ECOMMERCE</h2>
        </div>
        <div className={styles.pages}>
            <div className={styles.home}><NavLink activeClassName={styles.active}  to='/home'>HOME</NavLink></div>
            <div className={styles.store}><NavLink activeClassName={styles.active}  to='/store'>STORE</NavLink></div>
            <div className={styles.about}><NavLink activeClassName={styles.active}  to='/about'>ABOUT</NavLink></div>
            <div className={styles.contact}><NavLink activeClassName={styles.active}  to='/contact'>CONTACT US</NavLink></div>
        </div>
        <div className={styles.authbutton}>
            <div className={styles.login}><NavLink to='/store/login'><button className={styles.authHandle} onClick={AuthHandler}>{ctx.isLogin ? 'LogOut':'Login'}</button></NavLink></div>
            <div className={styles.cart}>
                {props.cart && <CartButton 
                    className={styles.buttons} 
                    name='Cart' 
                    quantity={ctx.totalQuantity} 
                    cartshow={props.cartshow}
                />}
            </div>
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