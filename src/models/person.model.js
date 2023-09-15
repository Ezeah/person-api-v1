// Define the person Schema
const mongoose = require('mongoose')

const personSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a person's name"]
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
    },
    {   // Timestamps
        timestamps: true
    }
)

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

