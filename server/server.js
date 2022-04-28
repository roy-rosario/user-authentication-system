require('dotenv').config()
const express = require('express')
const server = express()
const jwt = require("jsonwebtoken")
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "proxy17",
    database: "test_page"
})

server.use(express.json())

server.listen(3001)

server.get('/posts', async(req, res)=>{
    try{
        const result = await db.promise().query(`SELECT * FROM posts`)
        res.status(200).json(result[0])
    }
    catch{
        res.status(400).send('could not retrieve users')
    }
})