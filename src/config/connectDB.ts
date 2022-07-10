import 'dotenv/config';
import mongoose from 'mongoose';
import { tryCatchMiddlewareNotAPI } from '../middlewares/try.catch.middleware';

const connectDB = async () => tryCatchMiddlewareNotAPI(mongoose.connect(process.env.URL!), 'Connected to DB');

export default connectDB;