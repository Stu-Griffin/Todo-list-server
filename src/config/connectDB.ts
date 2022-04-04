import config from './config';
import mongoose from 'mongoose';
import { tryCatchMiddlewareNotAPI } from '../middlewares/try.catch.middleware';

const connectDB = async () => tryCatchMiddlewareNotAPI(mongoose.connect(config.url), 'Connected to DB');

export default connectDB;