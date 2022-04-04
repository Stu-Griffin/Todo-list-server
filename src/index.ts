import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import AppRouter from './routes/routes';
import connectDB from './config/connectDB';

const app = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE']}));

connectDB();
router.init();

app.listen(config.port, (): void => {
    console.log('Server Running!');
});