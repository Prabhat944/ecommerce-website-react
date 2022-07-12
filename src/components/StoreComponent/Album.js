import {Link} from 'react-router-dom';
import ProductForm from "./ProductForm";
import styles from './Album.module.css';

const Album=props=>{

    return(
        <div className={styles.album}>
           <Link to={`/store/${props.name}`}> 
                <h3>{props.name}</h3>
                <div className={styles.image}>
                <img src={props.src} alt={props.alt} />
                </div>
            </Link>
            <ProductForm price={props.price} items={props.items}/>
        </div>    
    );
};

export default Album;