import styles from './ProductForm.module.css';

const ProductForm = props =>{

    return (
        <div className={styles.form}>
            <span>$ {props.price}</span>
            <button>ADD TO CART</button>
        </div>
    );
};

export default ProductForm;