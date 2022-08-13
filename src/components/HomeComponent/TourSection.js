import { Fragment } from 'react';
import styles from './TourSection.module.css';


const TourSection=props=>{
  const MovieDeleteHandler=async(event)=>{
    event.preventDefault();
    await fetch(`https://e-commerce-f98f7-default-rtdb.firebaseio.com/Movies/${props.id}.json/`,{method:'DELETE'});
    props.fetchTheMovie();
  }
    return (
        <Fragment>
        <div className={styles.tours}>
        <ul>
            <li className={styles.date}>{props.date}</li>
            <li className={styles.title}>{props.name}</li>
            <li className={styles.text}>{props.text}</li>
        </ul>
        <button onClick={MovieDeleteHandler}>Delete</button>
        <button>BUY TICKETS</button>
        </div>
        <hr/>
        </Fragment>
    );
};

export default TourSection;