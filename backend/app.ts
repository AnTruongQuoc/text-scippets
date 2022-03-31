import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errors';
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors())

//import all router
import auth from './routers/authRouter';

app.use('/api/v1', auth)

// Middleware to handle errors
app.use(errorMiddleware);

export default app;
