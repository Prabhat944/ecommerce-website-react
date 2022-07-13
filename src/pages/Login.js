import { Fragment, useRef, useState } from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";
import styles from './Login.module.css';
const Login=props=>{
    const [isLogin,setIsLogin]=useState(true);
    const [isLoading,setIsLoading] = useState(false);
 const EmailInputRef=useRef();
 const PasswordInputRef=useRef();
 
 const switchAuthModeHandler=()=>{
    setIsLogin((prev)=>!prev);
 }
 const FormSubmitHandler=(event)=>{
    event.preventDefault();
    setIsLoading(true);
    const userEmail=EmailInputRef.current.value;
    const userPassword=PasswordInputRef.current.value;
    let url='';

   if(isLogin){
     
    }else{
     url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAu9mJRJ4CyRuNQ3DerQ3eNg89yd1F95Cs';
    }
    
    fetch(url,{
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

        }else{
            return res.json().then(data=>
                {let errorMessage='Authentication Failed';
                if(data && data.error && data.error.message){
                      errorMessage=data.error.message;
                }
                alert(errorMessage);
            }
    )}
    }
    )
    
 }
    return (
        <Fragment>
        <Header cart={true} />
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
                    {!isLoading && <button>{isLogin?'Login':'Sign Up'}</button>}
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
        <Footer />
        </Fragment>
    );
};

export default Login;
