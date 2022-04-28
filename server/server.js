require('dotenv').config()
const express = require('express')
const server = express()
const jwt = require("jsonwebtoken")
const mysql = require('mysql2')
const cors = require('cors')

server.use(express.json())

server.use(cors({
    origin: "http://localhost:3000"
}))

server.listen(3001)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "proxy17",
    database: "test_page"
})

server.get('/posts', async(req, res)=>{
    try{
        const result = await db.promise().query(`SELECT * FROM posts`)
        res.status(200).json(result[0])
    }
    catch{
        res.status(400).send('could not retrieve users')
    }
})