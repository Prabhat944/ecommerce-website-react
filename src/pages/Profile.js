import styles from './Profile.module.css';
import { useRef } from 'react';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile=props=>{
  const history = useHistory();
  const [isLoading,setIsLoading] = useState(false);
  const ctx = useContext(AuthContext);
  const NewPasswordRef = useRef();
 const NewPasswordHandler=event=>{
  event.preventDefault();
  setIsLoading(true);
  const NewPassword=NewPasswordRef.current.value;
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAu9mJRJ4CyRuNQ3DerQ3eNg89yd1F95Cs',{
    method:"POST",
    body:JSON.stringify({
      idToken:ctx.token,
      password:NewPassword,
      returnSecureToken:true
    }),
    headers:{
      'Content-Type':'application/json'
    }
  })
  
  .then(res=>{
    setIsLoading(false);
    if(res.ok){
      alert('Password Changed Successfully');
      history.replace('/store');
    }else{
      return res.json().then(err=>alert(err.error.message))
    }
  })

 }
    return (
      <section className={styles.section}>
        <h1>Your User Profile</h1>
        <form onSubmit={NewPasswordHandler}>
          <div className={styles.title}>
            <h2>Change Your Password</h2>
          </div>
           <div className={styles.newpassword}>
            <label htmlFor="Password">New Password:</label>
            <input type='password' id='Password' min='7' required ref={NewPasswordRef}/>
           </div>
           <div className={styles.submit}>
            {!isLoading && <button>Submit</button>}
            {isLoading && <p>Sending Request ...</p>}
           </div>
        </form>
        </section>
  );
};

export default Profile;
