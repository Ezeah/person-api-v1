const connectDB = require('./database/db');
const dotenv = require('dotenv').config();
const Person = require('./src/models/person.model');
const PORT = process.env.PORT || 5000;
const express = require('express');
const colors = require('colors');
require('express-async-errors');
const app = express();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
// get persons
app.get('/api', async(req, res) => {
    try {
        const person = await Person.find({});
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get person by id
app.get('/api/:user_id', async(req, res) =>{
    try {
        const {user_id} = req.params;
        const person = await Person.findById(user_id);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create person
app.post('/api', async(req, res) => {
    try {
        const person = await Person.create(req.body)
        res.status(200).json(person);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update person
app.put('/api/:user_id', async(req, res) => {
    try {
        const {user_id} = req.params;
        const person = await Person.findByIdAndUpdate(user_id, req.body);
        // when person cannot be found in database
        if(!person){
            return res.status(404).json({message: `cannot find any product with ID ${user_id}`})
        }
        const updatedPerson = await Person.findById(user_id);
        res.status(200).json(updatedPerson);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// update person
app.patch('/api/:user_id', async(req, res) => {
    try {
        const {user_id} = req.params;
        const person = await Person.findByIdAndUpdate(user_id, req.body);
        // when person cannot be found in database
        if(!person){
            return res.status(404).json({message: `cannot find any product with ID ${user_id}`})
        }
        const updatedPerson = await Person.findById(user_id);
        res.status(200).json(updatedPerson);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete person
app.delete('/api/:user_id', async(req, res) =>{
    try {
        const {user_id} = req.params;
        const person = await Person.findByIdAndDelete(user_id);
        if(!person){
            return res.status(404).json({message: `cannot find any product with ID ${user_id}`})
        }
        res.status(200).json(person);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
