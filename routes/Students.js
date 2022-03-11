const express = require("express")
const students = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const studentModel = require("../models/Student")
students.use(cors())

process.env.SECRET_KEY = 'secret'

students.post('/register', (req, res) => {
    const studentData = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    }

    studentModel.findOne({email: req.body.email}).then(student => {
        if (!student) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                studentData.password = hash
                studentModel.create(studentData).then(student => {
                    res.status(201).json({
                        status: student.email + 'registered!'
                    })
                }).catch(err => {
                    res.send('error' + err)
                })
            })
        } else {
            res.status(400).json({error: 'student already exists'});
        }
    }).catch(err => {
        res.send('error' + err)
    })
})

students.post('/login', (req, res) => {
    studentModel.findOne({email: req.body.email}).then(student => {
        if (student) {
            if (bcrypt.compareSync(req.body.password, student.password)) {
                const payload = {
                    _id: student._id,
                    email: student.email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {})
                res.send(token)
            } else {
                res.status(401).json({error: "student does not exist"})
            }
        } else {
            res.status(401).json({error: "student does not exist"})
        }
    }).catch(err => {
        res.send('error: ' + err)
    })

})

module.exports = students
