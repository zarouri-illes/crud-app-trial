import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import residencesRoute from './routes/residencesRoutes.js'
import Residence from './models/residence.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT
const db = process.env.MONGODB_URL

//middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(234).send("hello nigger")
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