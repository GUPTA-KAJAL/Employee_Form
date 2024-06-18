import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kajalgpt2725:Wr2XJ3Twdl996sK3@cluster0.bjstvka.mongodb.net/").then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
};
export default connectDB;