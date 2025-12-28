const express = require('express')
const app = express()

app.listen(3000)

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