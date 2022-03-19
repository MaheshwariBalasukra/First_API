const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const userRoute = require('./routes/user')

mongoose.connect('mongodb+srv://B161266:rgukt123@cluster0.f8p3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
    console.log('connection failed')
})
mongoose.connection.on('connected',con=>{
    console.log('connected sucessfully')
})

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use('/user',userRoute)

app.use((req,resp,next)=>{
    resp.status(200).json({message:'home'})
})


app.listen(8000)