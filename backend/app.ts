import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errors';
import { isAuthenticatedUser } from './middlewares/auth';
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors())

//import all router
import auth from './routers/authRouter';
import snipet from './routers/snipetRouter'
app.use('/api/v1', auth)
app.use('/api/v1', isAuthenticatedUser , snipet)
// Middleware to handle errors
app.use(errorMiddleware);

export default app;
