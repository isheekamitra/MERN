import React, { useEffect ,useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../App';
const Logout= () =>{
    const {state,dispatch}=useContext(UserContext);
    const history=useHistory();
    const[userdata,setuserdata]=useState({name:"",email:"",message
:""});
    const callContactPagei=async()=>{
        try{
           const resbackend=await fetch('/logout',{
               method:"GET",
               headers:{
                Accept:"application/json",
                   "Content-Type":"application/json"
               },
               credentials:"include"
           
           });

           const data=await resbackend.json();
           console.log(data);
           setuserdata({...userdata,name:data.name,email:data.email});
           if(!resbackend.status===200)
           {
               const error=new Error(resbackend.error);
               throw error;
           }
        }catch(err){
console.log(err);
dispatch({type:"USER",payload:false});
history.push('/login');
        }
    }
    useEffect(()=>{
     callContactPagei();

    },[]);

    return(
        <>

        </>
    );
}
export default Logout;