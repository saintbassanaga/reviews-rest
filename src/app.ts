import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";


const app = express()

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});


const MONGO_URL = 'mongodb+srv://saintbassanaga01:p5FC19BsPZopuI2i@reviewsdb.nofjnre.mongodb.net/?retryWrites=true&w=majority&appName=reviewsdb';
mongoose.Promise = global.Promise;
let connects = mongoose.connect(MONGO_URL).then(r => (console.log("Connection Created")), w => (console.log("Connection Lost!")));

console.log(connects)

mongoose.connection.on('error', (error: Error) => console.log(error));