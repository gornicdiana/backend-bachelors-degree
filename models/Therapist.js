const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TherapistSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstneme: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = Therapist = mongoose.model('therapists', TherapistSchema)