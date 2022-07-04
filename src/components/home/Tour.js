import { Fragment } from 'react';
import styles from './Tour.module.css';


const Tours=props=>{

    return (
        <Fragment>
        <div className={styles.tours}>
        <ul>
            <li className={styles.date}>{props.date}</li>
            <li className={styles.address}>{props.name}</li>
            <li className={styles.place}>{props.producer}</li>
        </ul>
        <button>BUY TICKETS</button>
        </div>
        <hr></hr>
        </Fragment>
    );
};

export default Tours;