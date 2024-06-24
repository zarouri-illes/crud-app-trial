import mongoose from 'mongoose'

const resSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true,
        },
        location: {
            type: String,
            require: true,
        },
        numberOfAppartements: {
            type: Number,
            require: true,
        }
    }
)

const Residence = mongoose.model('Residence', resSchema)

export default Residence