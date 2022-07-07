import React from 'react';
import styles from './Footer.module.css';

const Footer=props=>{
    return (
        <div className={`${styles.footer} ${props.className}`}>
         <div className={styles.generics}>The Generics</div>
         <div className={styles.logos}>
            
                <div>youtube</div>
                <div>spotify</div>
                <div>facebook</div>
            
         </div>
        </div>
    );
};

export default Footer;