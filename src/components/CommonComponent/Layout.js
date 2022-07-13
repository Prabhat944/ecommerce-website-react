import { Fragment } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import styles from './Layout.module.css';

const Layout=props=>{

    return(
        <Fragment >
            <MainNavigation cartshow={props.cartshow} />
            <div className={`${styles.generics}`}>
               <h2>The Generics</h2>
            </div>
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;