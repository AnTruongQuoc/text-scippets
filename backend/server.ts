import http from 'http'
import app from './app';
import connectDatabase from './config/database';
import dotenv from 'dotenv';
const port = Number(process.env.NODE_ENV) || 3000;
//setting up config file
dotenv.config({
    path: 'config/config.env'
});

//Connecting to database
connectDatabase();

if(process.env.NODE_ENV !== 'PRODUCTION') {
    http.createServer(app).listen(port, "192.168.52.179",() => console.log(`Example app listening on port ${port}!`));
}else {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
