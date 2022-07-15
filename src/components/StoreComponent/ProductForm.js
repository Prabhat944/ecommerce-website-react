import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import styles from './ProductForm.module.css';

const ProductForm = props =>{
    const ctx=useContext(AuthContext);
    const addToCart=()=>{
        
        ctx.addItem({...props.items,quantity:1});
    };
    return (
        <div className={styles.form}>
            <span>$ {props.price}</span>
            <button onClick={addToCart}>ADD TO CART</button>
        </div>
    );
};

export default ProductForm;