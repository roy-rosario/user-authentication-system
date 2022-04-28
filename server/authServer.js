require('dotenv').config()
const express = require("express")
const server = express()
const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')

server.use(express.json())

server.use(cors({
    origin: 'http://localhost:3000'
}))

server.listen(4001)

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "proxy17",
    database: "test_page"
})

server.get('/users', async(req, res)=>{
    await db.promise().query('SELECT * FROM users')
    .then(result => res.status(200).json(result[0]))
    .catch(err => res.status(400).send(err))
})

server.post('/signup', async(req, res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try{
        const newUser = {username: req.body.username, password: hashedPassword}
        await db.promise().query(`INSERT INTO users (username, password) VALUES ("${newUser.username}", "${newUser.password}")`)
        .then(result => res.status(200).send("user created"))
        .catch(err => alert(err))
    }
    catch{
        res.status(400).send('unable to creat user now')
    }
})

server.post('/login', async(req, res)=>{
    try{
        const userPresent = await db.promise().query(`SELECT * FROM users WHERE username = "${req.body.username}"`)
        if(userPresent[0].length < 1) return res.status(403).send('user not found')
        const passed = await bcrypt.compare(req.body.password, userPresent[0][0].password)
        if(passed){
            return res.status(200).send(true)
        }
        else{
            res.status(403).send('invalid password')
        }
    }
    catch{
        res.status(400).send('could not log in now')
    }
})