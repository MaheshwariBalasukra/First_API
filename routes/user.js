const express = require('express')
const Router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const res = require('express/lib/response');




Router.post('/signup',(req,resp,next)=>{
    console.log(req.body);
    var data = req.body;
    const user = new User({
        _id:new mongoose.Types.ObjectId,
        user_name:data.user_name,
        email:data.email,
        password:data.password

    });
    user.save()
    .then(result=>{
        console.log(result);
        resp.status(200).json({
            newUser:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

Router.post('/login',(req,resp,next)=>{
    User.find({user_name:req.body.user_name}).then(user=>{
        if(user.length<1) return resp.status(401).json({message:'user not found'})
        else
        { 
            if(req.body.password==user[0].password) resp.status(200).json({message:'login successful'})
            else resp.status(401).json({message:'password incorrect'})
        }
    })
})

module.exports = Router