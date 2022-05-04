require('dotenv').config()
const express = require('express')
const server = express()
const jwt = require("jsonwebtoken")
const mysql = require('mysql2')
const cors = require('cors')
const { json } = require('express/lib/response')

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

// server.get('/posts', async(req, res)=>{
//     try{
//         const result = await db.promise().query(`SELECT * FROM posts`)
//         res.status(200).json(result[0])
//     }
//     catch{
//         res.status(400).send('could not retrieve users')
//     }
// })

server.post("/posts", verifyToken, async(req, res)=>{
    try{
        const result = await db.promise().query(`SELECT posts.id, posts.title, posts.body FROM posts
        JOIN users ON posts.user_id = users.id
        WHERE users.username = "${req.user.username}"`)
        res.status(200).json({username: req.user.username, posts: result[0]})
    }
    catch{
        res.status(400).send('could not request data')
    }
})

function verifyToken(req, res, next){
    const token = req.body.token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err) return res.status(403).send("invalid credentials")
        req.user = decoded
        next()
    })
}
