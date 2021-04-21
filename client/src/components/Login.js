import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {UserContext} from '../App';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login=()=>{
     
  const {state,dispatch}=useContext(UserContext);
  const history=useHistory();
  const[email,setemail]=useState('');
  const [password,setpassword]=useState('');
   const[login,setlogin]=useState(false);
  const loginuser = async(e)=>{
   e.preventDefault();
   const res= await fetch('/login',{
     method:"POST",
     headers:{"Content-Type":"application/json"
   },
   body:JSON.stringify({
     email,password
   })
   });
   const data=res.json();
   if(res.status===422 || !data){
     window.alert("Please fill all the feilds");

   } 
   else if(res.status===423)
   {
    window.alert("Invalid password");
   }
   else if(res.status===424)
   {
    window.alert("No such existing account found");
   }
   else
   { dispatch({type:"USER",payload:true});
     window.alert("User loged in succesfully");
     history.push('/');
   }
  }
  // const responsegoogle=(res)=>{
  //   console.log(res);
  //   console.log(res.profileObj);
  //   history.push('/');
  // }
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   setlogin(true);
  // }
 return (
<>

<section className="signup">
  <div className="container ">
  <div className="signupimage">
      <figure>
          <img src="https://gifimage.net/wp-content/uploads/2018/11/e-learning-gif-2.gif" alt="login" />
      </figure>
      <NavLink to='/register' className="signup-image-link">Create an Account</NavLink>
  </div>
     <div className="signin-content">
           <div className="signup-form">
           <h2 className="formin-title">Login</h2>
           </div>
      

<form className="register-form" id="register-form" method="POST">
  
      <div className="form-group">
      <label htmlFor="email">
      <i className="zmdi zmdi-email material-icons-name"></i>
           
      </label>
      <input type="email" name="name" id="name" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Your Email"/>
      </div>
      
      <div className="form-group">
      <label htmlFor="password">
      <i className="zmdi zmdi-lock material-icons-name"></i>
           
      </label>
      <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
      </div>
     
      <div className="form-button">
         <input type="submit" name="signup" id="signup"
             className="form-submit" value="Login"
             onClick={loginuser}
         />

      </div>
      {/* <h6 className="or">OR</h6>
      <GoogleLogin
      clientId="813213685182-f74f810bkolcl7vm1e9kdura890pk3o2.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responsegoogle}
      onFailure={responsegoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
      />
      
      {login?'Home':
     <>
     
      <FacebookLogin
    appId="196998128699138"
    autoLoad={true}
    fields="name,email,picture"
  //  onClick={componentClicked}
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa fa-facebook"
     />
     </>
      }
      */}
      
     
</form>
 </div>
 
    
</div>
  </section>

</>
 );
}
export default Login;