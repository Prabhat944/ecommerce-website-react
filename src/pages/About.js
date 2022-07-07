import { Fragment } from "react";
import Header from "../components/CommonComponent/Header";
import Footer from '../components/CommonComponent/Footer';
import styles from './About.module.css';
import AboutSection from "../components/AboutComponent/AboutSection";

const About=prop=>{

    return (
        <Fragment>
           <Header cart={false} generics={styles.generics}/>
           <div className={styles.section}>
            <h2>ABOUT</h2>
              <AboutSection />
           </div>
           <Footer />
        </Fragment>
    );
};

export default About;