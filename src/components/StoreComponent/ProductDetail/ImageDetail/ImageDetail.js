import React, { useContext } from 'react';

import AuthContext from '../../../../store/AuthContext';
import styles from './ImageDetail.module.css';

const ImageDetail=props=>{
   const ctx =  useContext(AuthContext);
   const AddToCart=event=>{
    event.preventDefault();
    ctx.addItem({...props.item,quantity:1})
   }
    return (
                <div className={styles.imagesection}>
                    <div className={styles.itemimage}>
                        <div className={styles.sideImage}>
                            <div className={styles.allsideview}><img src={props.src} alt={props.alt} /></div>
                            <div className={styles.allsideview}><img src={props.src} alt={props.alt} /></div>
                            <div className={styles.allsideview}><img src={props.src} alt={props.alt} /></div>
                            <div className={styles.allsideview}><img src={props.src} alt={props.alt} /></div>
                            <div className={styles.allsideview}><img src={props.src} alt={props.alt} /></div>
                        </div>
                        <div className={styles.mainimage}>
                        <img src={props.src} alt={props.alt} />
                        </div> 
                    </div>
                
                    <div className={styles.AddToCart}>
                        <button onClick={AddToCart} >ADD TO CART</button>
                    </div>
                </div>
    );
};

export default ImageDetail;