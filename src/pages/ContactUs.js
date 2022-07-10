import { Fragment, useState } from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";
import styles from './ContactUs.module.css';

const ContactUs=props=>{
const [userName,setUserName]=useState('');
const [userEmail,setUserEmail]=useState('');
const [userPhone,setUserPhone]=useState('');

const NameChangeHandler=event=>{
setUserName(event.target.value);
}
const EmailChangeHandler=event=>{
setUserEmail(event.target.value);
}
const PhoneChangeHandler=event=>{
setUserPhone(event.target.value);
}
const ContactFormSubmitHandler=async(event)=>{
    event.preventDefault();
    const userDetail={
        name:userName,
        email:userEmail,
        phone:userPhone
    };
    await fetch('https://react-https-e99ad-default-rtdb.firebaseio.com/UserContactInfo.json',{
        method:'POST',
        body:JSON.stringify(userDetail),
        headers:{
            'Content-Type':"application/json"
          }
    });
    alert("Detail submitted");
    setUserName('');
    setUserEmail('');
    setUserPhone('');
}
return(
    <Fragment>
        <Header Cart={false}/>
        <div className={styles.contact}><h2>CONTACT US</h2></div>
        <div className={styles.section}>
            <form onSubmit={ContactFormSubmitHandler}>
                <label htmlFor="Name">Name:</label><br/>
                <input type='text' id='Name' className={styles.name} onChange={NameChangeHandler} value={userName}/><br/>
                <label htmlFor="Email">Email Id:</label> <br/>
                <input type='email' id='Email'className={styles.email} onChange={EmailChangeHandler} value={userEmail}/><br/>
                <label htmlFor="PhoneNumber">Phone Number:</label><br/>
                <input type='number' id="PhoneNumber" className={styles.number} onChange={PhoneChangeHandler} value={userPhone}/><br/>
                <button>SUBMIT</button>
            </form>
        </div>
        <Footer />
    </Fragment>
);
};
export default ContactUs;