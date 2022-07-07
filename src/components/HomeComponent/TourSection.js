import { Fragment } from 'react';
import styles from './TourSection.module.css';


const TourSection=props=>{

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
        <hr/>
        </Fragment>
    );
};

export default TourSection;