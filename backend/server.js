import bodyParser from 'body-parser';
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import route from './routes/devicesRoutes.js';
import cors from 'cors'

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

dotenv.config()
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=>{
    console.log('MongoDB connected')
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})

app.use('/api/devices',route)
