import dotenv from "dotenv"
import mongoose from "mongoose"
export const connectDataBase =  async () => {
try {
    await mongoose.connect(process.env.MONGOOSE_URI)
    console.log('connected successfully');
} catch (error) {
    console.log(error);
}
}