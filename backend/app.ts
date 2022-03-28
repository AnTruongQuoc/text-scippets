import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => res.send('Hello World!'))
export default app;
