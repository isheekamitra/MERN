import React, { useEffect ,useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../App';
import axios from 'axios';
import { useContext } from 'react';
// import authenticate from '../../../middleware/authenticate';
const About=()=>{
    const {state,dispatch}= useContext(UserContext);
    const history=useHistory();
    const[userdata,setuserdata]=useState({});
    const callAboutPagei=async()=>{
        try{
           const resbackend=await fetch('/about',{
               method:"GET",
               headers:{
                   Accept:"application/json",
                   "Content-Type":"application/json"
               },
               credentials:"include"
           
           });

           const data=await resbackend.json();
           console.log(data);
           setuserdata(data);
           if(!resbackend.status===200)
           {
               const error=new Error(resbackend.error);
               throw error;
           }
        }catch(err){
console.log(err);
history.push('/login');
        }
    }
    useEffect(()=>{
     callAboutPagei();

    },[]);
    const editdata = async (e) =>{
        e.preventDefault();
        const res= await fetch('/update',{
          method:"PUT",
          headers:{"Content-Type":"application/json"
        },
        body:JSON.stringify({
          id:"609b98f07b73be22785b3198",
          name:"vidya"
        })
        });
        const userdata=res.json();
        dispatch({type:"USER",payload:true});
     window.alert("User loged in succesfully");
     
    }
      
    
 return (
<>


<div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center ">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                                <p>Hello There!</p>
                                <h6 className="f-w-600">{userdata.username}  </h6>
                                <EditIcon className="edit" fontSize="small"/>
                              {/* <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i> */}
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <form className="card-block" >
  
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-12">
                                    <p className="m-b-10 f-w-600">FirstName  <EditIcon onClick={editdata} className="edit" fontSize="small"/></p>
                                        <h6 className="text-muted f-w-400">{userdata.name}</h6>
                                    <p className="m-b-10 f-w-600">LastName <EditIcon className="edit" fontSize="small"/></p>
                                        <h6 className="text-muted f-w-400">{userdata.work} </h6>
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{userdata.email}</h6>
                                        <p className="m-b-10 f-w-600">User Id</p>
                                        <h6 className="text-muted f-w-400">{userdata._id}</h6>
                                    </div>

                                </div>
                                
                                
                                {/* <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
 );
}



export default About;