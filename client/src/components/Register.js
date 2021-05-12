import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
const Register=()=>{

  const history=useHistory();
  const[user,setuser]=useState({
    name:"",
    email:"",
    work:"",
    password:"",
    cpassword:"",
    username:""

  });
  let name,value;
  const handlechange=(event)=>{
    console.log(event); 
    name=event.target.name;
    value=event.target.value;
    setuser({...user,[name]:value});
  }
   const postdata = async (event) =>{
      event.preventDefault();
      const{name,email,work,password,cpassword,username}=user;
      const res=await fetch("/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name,email,work,password,cpassword,username
        })
      });

      const data=await res.json();
      if(res.status===422|| !data){
        window.alert("Please fill all the feilds");
        console.log("invalid");
      }
     else if(res.status===417)
     {
      window.alert("Email already exist");
     }
     else if(res.status===417)
     {
      window.alert("Sorry! This username is already taken!");
     }
     else if(res.status===423)
     {
      window.alert("Passwords dont match");
     }
     else if(res.status===500)
     {
      window.alert("Failed to register");
     }
      else 
      {
        window.alert("User registered succesfully");
        console.log("success");
        history.push('/login');
      }

   }
 return (

<>
<section className="signup">
  <div className="container ">
     <div className="signup-content">
           <div className="signup-form">
           <h2 className="form-title">Register</h2>
           </div>
           
<form className="register-form" id="register-form" method="POST">
   <div className="form-group">
      <label htmlFor="name">
      <i className="zmdi zmdi-account material-icons-name"></i>
           
      </label>
      <input type="text" name="name" id="name" value={user.name} onChange={handlechange} 
      placeholder="Your FirstName"/>
      </div>

      <div className="form-group">
      <label htmlFor="work">
      <i className="zmdi zmdi-slideshow material-icons-name"></i>
           
      </label>
      <input type="text" name="work" id="work" value={user.work} onChange={handlechange} 
      placeholder="Your LastName"/>
      </div>
      <div className="form-group">
      <label htmlFor="work">
      <i className="zmdi zmdi-slideshow material-icons-name"></i>
           
      </label>
      <input type="text" name="username" id="username" value={user.username} onChange={handlechange} 
      placeholder="Username"/>
      </div>
      <div className="form-group">
      <label htmlFor="email">
      <i className="zmdi zmdi-email material-icons-name"></i>
           
      </label>
      <input type="email" name="email" id="email" value={user.email} onChange={handlechange} 
      placeholder="Your Email"/>
      </div>
     
      <div className="form-group">
      <label htmlFor="password">
      <i className="zmdi zmdi-lock material-icons-name"></i>
           
      </label>
      <input type="password" name="password" id="password" value={user.password} onChange={handlechange} 
      placeholder="Password"/>
      </div>
      <div className="form-group">
      <label htmlFor="cpassword">
      <i className="zmdi zmdi-lock material-icons-name"></i>
           
      </label>
      <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handlechange} 
      placeholder="Confirm your Password"/>
      </div>
      <div className="form-button">
         <input type="submit" name="signup" id="signup"
             className="form-submit" value="Register"
             onClick={postdata}
         />

      </div>
</form>
 </div>
  <div className="signupimage">
      <figure>
          <img src="https://s18.postimg.cc/g7ec26k8p/figure_colored_light_bulb_puzzle_500_clr_9679.gif" />
      </figure>
      <NavLink to='/login' className="signup-image-link">I am already registered</NavLink>
  </div>

    
</div>
  </section>




</>
 );
}
export default Register;