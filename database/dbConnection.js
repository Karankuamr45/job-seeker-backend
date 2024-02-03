import mongoose from "mongoose";

export const dbConnection=()=>{
  
        mongoose.connect(process.env.MONGO_URI,{
            dbName:"JOB_SEEKING_APP"
        })
        .then(()=>{
            console.log("connected to database")
        })
        .catch((err)=>{
            console.log(`error in conecting database : ${err}`)

        })

   
}