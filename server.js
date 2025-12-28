require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())



const posts =[
    {
        username: 'Vedant',
        title: 'Post 1'
    }
    ,
    {
        username: 'Wade',
        title: 'Post 2'
    }
]

app.get('/posts',(req,res) =>{
    res.json(posts)
}
)
app.post('/login',(req,res) =>{
    //Authenticate the user

    const username = req.body.username
    const user = {name:username}
    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accesstoken:accesstoken})
})

app.listen(3000)
