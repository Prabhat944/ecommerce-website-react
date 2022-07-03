import styles from './Tour.module.css';


const Tours=props=>{

    return (
        <div className={styles.tours}>
        <ul>
            <li className={styles.date}>{props.date}</li>
            <li className={styles.address}>{props.address}</li>
            <li className={styles.place}>{props.place}</li>
        </ul>
        <button>BUY TICKETS</button>
        </div>
    );
};

export default Tours;