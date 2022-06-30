
import ProductForm from "./ProductForm";
import styles from './Album.module.css';

const Album=props=>{

    return(
        <div>
        <div className={styles.album}>
            <h3>{props.name}</h3>
            <div className={styles.image}>
            <img src={props.src} alt={props.alt} />
            </div>
        </div>
        <ProductForm  price={props.price}/>
        </div>
        
    );
};

export default Album;