import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import residencesRoute from './routes/residencesRoutes.js'
import cors from 'cors'

dotenv.config();

const app = express()
const PORT = process.env.PORT
const db = process.env.MONGODB_URL

// Middleware for parsing request body
app.use(express.json())

// Middleware to handle CORS policy
// CORS, You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized.
// Option 1: Allow all origins with default cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
app.use(
    cors(
        {
            origin: 'https://localhost:3000',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type']
        }
    )
)

app.get('/', (req, res) => {
    res.status(234).send("hello")
})

app.use('/', residencesRoute)

mongoose
    .connect(db)
    .then(() => {
        console.log("Connected to databse successfully")
        app.listen(PORT, (req, res) => {
            console.log(`app listening on port : ${PORT}`);
        });
        
    })
    .catch((err) => {
        console.log(err)
    })