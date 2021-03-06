var express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5010;

app.use(bodyParser.json());
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: false}));

const mongoURI = 'mongodb+srv://dianagornic2:dianagornic2pass@licenta.nroj3.mongodb.net/licenta?retryWrites=true&w=majority';


mongoose.connect(mongoURI, {useNewUrlParser: true}).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

var Students = require('./routes/Students');
var Articles = require('./routes/Articles');
var Therapists = require('./routes/Therapists');
var Appointments = require('./routes/Appointments');

app.use('/students', Students);
app.use('/articles', Articles);
app.use('/therapists', Therapists);
app.use('/appointments', Appointments);

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})
