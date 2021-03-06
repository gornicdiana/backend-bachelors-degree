const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    therapist: {
        type: String,
        required: true
    },
    student: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    response: {
        type: Boolean,
        required: false
    },
    link: {
        type: String,
        required: false
    }
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
