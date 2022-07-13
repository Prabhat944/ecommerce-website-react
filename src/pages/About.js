import styles from './About.module.css';
import AboutSection from "../components/AboutComponent/AboutSection";

const About=prop=>{

    return (
           <div className={styles.section}>
            <h2>ABOUT</h2>
              <AboutSection />
           </div>
    );
};

export default About;