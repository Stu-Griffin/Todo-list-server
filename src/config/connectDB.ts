import config from './config';
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(config.url);
        console.log('connected to DB');
    } catch (e) {
        console.log(e)
    }
}

export default connectDB;