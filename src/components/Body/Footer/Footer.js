import styles from './Footer.module.css';

const Footer=props=>{
    return (
        <footer className={styles.footer}>
         <div className={styles.generics}>The Generics</div>
         <div className={styles.logos}>
            <ul>
                <li>youtube</li>
                <li>spotify</li>
                <li>facebook</li>
            </ul>
         </div>
        </footer>
    );
};

export default Footer;