import bodyParser from 'body-parser';
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import route from './routes/devicesRoutes.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:5173',
        'http://192.168.18.20:5173', //local network can be open from other devices in same network
    ]
}))

dotenv.config()
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=>{
    console.log('MongoDB connected')
    app.listen(PORT,'0.0.0.0',()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})

app.use('/api/devices',route)
