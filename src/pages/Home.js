import { Fragment } from "react";
import Footer from "../components/Body/Footer/Footer";
import Header from "../components/Header/Header";
import Tours from "../components/home/Tour";
import styles from './Home.module.css';

const Home=props=>{

    return (
        <Fragment>
          <Header cart={false} generics={styles.generics}>
            <button className={styles.getalbum}>Get Our Latest Album</button>
            <button className={styles.play}>►</button>
          </Header>
           <section className={styles.section}>
            <h2>TOURS</h2>
            <Tours date='JUL 16' address='DETROIT, MI' place='DTE ENERGY MUSIC THEATRE'/>
            <hr></hr>
            <Tours date='JUL 19' address='TORONTO, ON' place='BUDWEISER STAGE'/>
            <hr></hr> 
            <Tours date='JUL 22' address='BRISTOW, VA' place='JIGGY LUBE LIVE'/>
            <hr></hr>
            <Tours date='JUL 29' address='PHEONIX, AZ' place='AK-CHIN PAVILION'/>
            <hr></hr>
            <Tours date='AUG 2' address='LAS VEGAS, NV' place='T-MOBILE ARENA'/>
            <hr></hr>
            <Tours date='AUG 7' address='CONCORD, CA' place='CONCORD PAVILION'/>
            <hr></hr>
           </section>
          <Footer />
        </Fragment>
    );
};

export default Home;