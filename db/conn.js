const mongoose=require('mongoose');
const url=process.env.URL;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("database connected");
}).catch((err)=>console.log("database not connected"));