import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Residence from './models/residence.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT
const db = process.env.MONGODB_URL

app.use(express.json())

app.get('/', (req, res) => {
    res.status(234).send("hello nigger")
})

// route to create new residence
app.post('/residence', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.location ||
            !req.body.numberOfAppartements
        ) {
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }

        const newRes = {
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            numberOfAppartements: req.body.numberOfAppartements
        }

        const Resi = await Residence.create(newRes)
        res.status(201).send(Resi)
        
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
})

// route to get all residences
app.get('/residence', async (req, res) => {
    try {
        const residences = await Residence.find({})
        res.status(200).json(residences)
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
})

// route to get a single residence by id
app.get('/residence/:id', async (req, res) => {
    try {
        const { id } = req.params
        const residence = await Residence.findById(id)
        res.status(200).json(residence)
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
})

//update a residence
app.put('/residence/:id', (req, res) => {
    try{
        const { id } = req.params

    }catch(err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

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