import mongoose from "mongoose";



export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://iamsharmaalokesh:1234567890@cluster0.kttowja.mongodb.net/foody')
    .then(() => console.log('MongoDB Connected...'))
}