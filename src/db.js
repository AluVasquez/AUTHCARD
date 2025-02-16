import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AluSoporte:69_Mongodb_69@alusoporte.wm8d9hu.mongodb.net/?retryWrites=true&w=majority&appName=AluSoporte");
        console.log("---DB is connected ---")
    } catch (error) {
        console.log(error);
    }
};