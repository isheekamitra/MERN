import React, { useEffect ,useState} from 'react';
const Home=()=>{
   
      const[username,setusername]=useState('');
      const[show,setshow]=useState(false);

          const callContactiPagei=async()=>{
              try{
                 const resbackend=await fetch('/getdata',{
                     method:"GET",
                     headers:{
                         
                         "Content-Type":"application/json"
                     }
                 
                 });
      
                 const data=await resbackend.json();
                 console.log(data);
                 setusername(data.name);
                 setshow(true);
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
           callContactiPagei();
      
          },[]);
      
 return (

    
<>

      <div className="home-div">

     <div className="home">
     
     <img  src="https://blog.commlabindia.com/wp-content/uploads/2015/02/creating-storyline-templates-for-elearning-featured.gif" alt="home"></img>
    <div className="main">
	<span className="w">W</span>
	<span className="e">E</span>
	<span className="l">L</span>
	<span className="c">C</span>
	<span className="letter"></span>
	<span className="m">M</span>
	<span className="ee">E</span>
</div>
      </div>

    
      
      <div className="home-text">
      <h1 className="title">{username}</h1>
     <h2>{show?'HAPPY TO SEE YOU BACK!':'WE ARE THE GROUP OF DEVELOPERS'}</h2>
     <h6> Submit your ideas and begin the journy with us!</h6>
  
      </div>
      </div>


  
</>
 );
}
export default Home;