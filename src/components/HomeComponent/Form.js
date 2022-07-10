import React,{ useState } from 'react';
import styles from './Form.module.css';

const Form=(props)=>{
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredText,setEnteredText] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  const TitleInputHandler=(event)=>{
     setEnteredTitle(event.target.value);
  }
  const TextInputHandler=(event)=>{
    setEnteredText(event.target.value);
 }
 const DateInputHandler=(event)=>{
    setEnteredDate(event.target.value);
 }
  
  const MovieInputHandler=(event)=>{
    event.preventDefault();
    if(enteredDate.length === 0 || enteredText.slice().length < 3 || enteredTitle.slice().length <2){
        alert("Please enter valid input");
        return;
    }
    const NewMovie={
      release_date:enteredDate,
        title:enteredTitle,
        opening_crawl:enteredText
    }
    setEnteredDate('');
    setEnteredText('');
    setEnteredTitle('');

    props.AddedMovie(NewMovie);
  }
  
  
    return (
        <div className={styles.form}>
        <form onSubmit={MovieInputHandler}>
            <label htmlFor='title' >Title</label><br/>
            <input 
            type='text' 
            className={styles.title} 
            id='title' 
            name='title'
            value={enteredTitle}
            onChange={TitleInputHandler}
            /><br/>
            <label htmlFor='text'>Opening Text</label><br/>
            <input 
            type='text' 
            className={styles.text} 
            id='text' 
            name='text'
            value={enteredText}
            onChange={TextInputHandler}
            /><br />
            <label htmlFor='date'>Release Date</label><br/>
            <input 
            type='date' 
            className={styles.date} 
            id='text' 
            name='date'
            value={enteredDate}
            onChange={DateInputHandler}
            /><br/>
            <button className={styles.submit}>Add Movie</button>
        </form>
        </div>
    );
};

export default React.memo(Form);