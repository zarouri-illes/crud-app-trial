import express from 'express'
import Residence from '../models/residence.js'

const router = express.Router()

// route to create new residence
router.post('/residence', async (req, res) => {
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
router.get('/residence', async (req, res) => {
    try {
        const residences = await Residence.find({})
        res.status(200).json(residences)
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
})

// route to get a single residence by id
router.get('/residence/:id', async (req, res) => {
    try {
        const { id } = req.params
        const residence = await Residence.findById(id)
        res.status(200).json(residence)
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
})

//update a residence
router.put('/residence/:id', async (req, res) => {
    try{
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

        const { id } = req.params

        const result = await Residence.findByIdAndUpdate(id, req.body)

        if(!result) return res.status(404).json({ message: 'Resdience not found'})
        res.status(200).json({ message: 'Resdience updated successfully'})

    }catch(err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// delete a residence
router.delete('/residence/:id', async (req, res) => {
    try {
        const { id } = req.params

        const result = await Residence.findByIdAndDelete(id, req.body)

        if(!result) return res.status(404).json({ message: 'Resdience not found'})
        res.status(200).json({ message: 'Resdience deleted successfully'})

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
        res.status(200).json(residence)
    }
})

export default router