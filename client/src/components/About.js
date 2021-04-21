import React, { useEffect ,useState} from 'react';
import {useHistory} from 'react-router-dom';
const About=()=>{
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
 return (
<>
{/*


<div className="emp-profile">
<form  className="aboutform" method="GET">
    <div className="row">
        <div className="col-md-4">
           
            <div className="
            profile-img">
 <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" height="150px" alt="gg"></img>
 </div>
  
            </div>
        
        <div className="col-md-6">
        <div className="profile-head">
         <h5>{userdata.name}</h5>
         <h6>{userdata.work}</h6>
         <p className="profile-rating mt-3 mb-5">RANKINGS ⭐<span>1/10</span></p>
         
         <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link " id="home-tab" href="#home" data-toogle="tab" role="tab">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id="home-tab" href="#home" data-toogle="tab" role="tab">Timeline</a>
        </li>
        </ul>

</div>
       </div>
        <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> 
        </div>
        <div className="row">

            <div className="col-md-4">
                <div className="profile-work">
                    <p>Worklink</p>
                    <a href="https://www.linkedin.com/in/isheeka-mitra-6aa9b61b8/" rel="noreferrer" target="_blank">linkedin</a>
                </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col-md-6">
                            <label >User Id</label>
                        </div>
                        <div className="col-md-6">
                           
                           <p>{userdata._id}</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <label >Name</label>
                        </div>
                        <div className="col-md-6">
                           
                           <p>{userdata.name}</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <label >Email</label>
                        </div>
                        <div className="col-md-6">
                           
                           <p>{userdata.email}</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <label >Profession</label>
                        </div>
                        <div className="col-md-6">
                           
                           <p>{userdata.work}</p>
                        </div>
                    </div>
                   
                </div>

                </div>
            </div>
        </div>
    </div>
</form> 

</div>*/}




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
                                <h6 className="f-w-600">{userdata.name}</h6>
                              <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-12">
                                    <p className="m-b-10 f-w-600">Proffession</p>
                                        <h6 className="text-muted f-w-400">{userdata.work}</h6>
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{userdata.email}</h6>
                                        <p className="m-b-10 f-w-600">User Id</p>
                                        <h6 className="text-muted f-w-400">{userdata._id}</h6>
                                    </div>

                                </div>
                                
                                
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
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