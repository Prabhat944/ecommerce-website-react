import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import styles from './Login.module.css';
const Login=props=>{
    const ctx = useContext(AuthContext);
    const history = useHistory();
    const [isLogin,setIsLogin]=useState(true);
    const [isLoading,setIsLoading] = useState(false);
 const EmailInputRef=useRef();
 const PasswordInputRef=useRef();
 
 const switchAuthModeHandler=()=>{
    setIsLogin((prev)=>!prev);
 }
 const FormSubmitHandler=async(event)=>{
    event.preventDefault();
    setIsLoading(true);
    const userEmail=EmailInputRef.current.value;
    const userPassword=PasswordInputRef.current.value;
    let url='';

   if(isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUqqKD1Ka32amxBnRDVKUADu_VUkm27oc';
    }else{
     url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUqqKD1Ka32amxBnRDVKUADu_VUkm27oc';
    }
    
    await fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:userEmail,
            password:userPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then(res=>{
        setIsLoading(false);
        if(res.ok){
           return res.json().then(data=>{
            ctx.Login(
                {token:data.idToken,
                 email:data.email});
            localStorage.setItem('userId',data.email);
            history.replace('/store');
           })
           
        }else{
            return res.json().then(data=>
                {let errorMessage='Authentication Failed';
                if(data && data.error && data.error.message){
                      errorMessage=data.error.message;
                }
                alert(errorMessage);
            }
    )}
    })
    .catch(err=>console.log('Login Error',err))
    
 }
    return (
          <section className={styles.section}>
            <form onSubmit={FormSubmitHandler}>
                <div className={styles.heading}><h2>{isLogin?'Sign In':'Sign Up'}</h2></div>
                <div className={styles.email}>
                    <label htmlFor='Email'>Email Id:</label>
                    <input type='email' id='Email' required ref={EmailInputRef}/>
                </div>
                <div className={styles.password}>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" id="Password" required ref={PasswordInputRef}/>
                </div>
                <div className={styles.submit}>
                    {!isLoading && <button className={styles.login}>{isLogin?'Login':'Sign Up'}</button>}
                    {isLoading && <p>Sending Request...</p>}
                
                    <button 
                    type='button' 
                    className={styles.authmode} 
                    onClick={switchAuthModeHandler}>
                        {isLogin?'Create New Account':'Login With Existing Account'}
                    </button>
                    </div>
            </form>
            
          </section>
    );
};

export default Login;
