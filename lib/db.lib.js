import mongoose from "mongoose"

const connectDB = async ()=>{
    try{

        const db = await mongoose.connect("mongodb://localhost:27017/db")
            console.log("db connected")

            return db
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

export default connectDB