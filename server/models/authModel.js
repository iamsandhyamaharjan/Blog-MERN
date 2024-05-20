import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const authtModel = mongoose.model("users",authSchema);
export default authtModel;