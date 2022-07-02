import {Fragment} from 'react';
import Album from "./Album";
import styles from './Section.module.css';

const Section=props=>{
    const items=props.product.map(item=>(
            <Album 
            key={Math.random().toString()}
            alt={item.title} 
            name={item.name} 
            src={item.imageUrl}
            price={item.price}
            items={item}/>
       ));
    return (<Fragment>
        <section className={styles.section}>
        <h2>Music</h2>
        <div className={styles.items}>{items}</div>
      </section>
      </Fragment>
    );
};

export default Section;