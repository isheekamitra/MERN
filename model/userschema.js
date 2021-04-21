const mongoose=require('mongoose');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');
const userschemas=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    },
    messages:[
         {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            message:{
                type:String,
                required:true
            },
         }
    ],
    tokens:[
        {
            token:{
                type:String,
        required:true
            }
        }

    ]
})

//hashing passwoord
userschemas.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);

    }
    next();
});
userschemas.methods.generateAuthToken=async function(){
    try{
           let token= jwt.sign({_id:this._id},process.env.SECRET_KEY);
           this.tokens=this.tokens.concat({token:token});
           await this.save();
           return token;
    }catch(err){
          console.log(err);
    }
}
//stored messsage
userschemas.methods.addmessage=async function(name,email,message){
    try{
          this.messages=this.messages.concat({name,email,message});
          await this.save();
          return this.messages;

    }catch(err)
    {
        console.log(err);
    }
}
const User=mongoose.model("data1",userschemas);
module.exports=User;
