import React,{Fragment} from 'react';
import Cart from '../Cart/Cart';
import styles from './Header.module.css';
const Header=props=>{
return (
    <Fragment>
    <header className={styles.head}>
        <div className={styles.headeritem}>
        <span>HOME</span>
        <span>STORE</span>
        <span>ABOUT</span>
        </div>
        <div >
        <Cart className={styles.buttons} name='Cart' quantity='0'/>
        </div>
    </header>
    <div className={styles.heading}>The Generics</div>
    </Fragment>
);
}

export default Header;