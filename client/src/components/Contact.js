import React,{ useEffect ,useState} from 'react';


const Contact=()=>{


    
    const[userdata,setuserdata]=useState({name:"",email:"",message
:""});
    const callContactPagei=async()=>{
        try{
           const resbackend=await fetch('/getdata',{
               method:"GET",
               headers:{
                   
                   "Content-Type":"application/json"
               }
           
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

        }
    }
    useEffect(()=>{
     callContactPagei();

    },[]);

    //storing data
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuserdata({...userdata,[name]:value});
    }
    //send data to backend
    const submitform=async(e)=>{
        e.preventDefault();
        const{name,email,message}=userdata;
        const res=await fetch('/contact',{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,message
        })
      
        });
        const data=await res.json();
        if(!data){
            console.log("message not sent");
        }
        else
        {
            alert("MESSAGE SENT");
            setuserdata({...userdata,message:""});
        }
    }
 return (
   
<>
  
    
<div className="contact_form">
    <div className="container">
        <div className="row">
            <div className="col-lg10 offset-lg-1">
                <div className="contact_form_container py-4">
                    <div className="contact_form_title">
                        Get In Touch</div>
                        <form method="POST" id="contact_form">
                             <div className="contact_form_name d-flex">
                                 <input type="text" id="contact_form_name"
                                 className="contact_form_name texty input_feild"
                                 name="name"
                                 value={userdata.name}

                                  onChange={handlechange}
                                   placeholder="Your name" required="
                                 true" />
                                      <input type="email" id="contact_form_email"
                                 className="contact_form_email texty input_feild"
                                 name="email"
                                 value={userdata.email}
                                 onChange={handlechange}
                                   placeholder="Your Email" required="
                                 true" />
                                   
                             </div>
                             <div className="contact-form-text mt-5">
                             <textarea className="text_feild contact_form_message"
                                 id="j"
                                 cols="70"
                                 rows="5"
                                 name="message"
                                value={userdata.message}
                                onChange={handlechange}
                                 placeholder="Message">
                                 

                             </textarea>
                             </div>
                             <div className="contact_form_button">
                                   <button type="submit" 
                                   onClick={submitform}
                                   className="button contact_submit_button">Send Message</button>
                             </div>
                        </form>
                    
                </div>
            </div>
        </div>
    </div>
</div>

</>
 );
}
export default Contact;