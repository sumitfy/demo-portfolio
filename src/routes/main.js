const express = require('express')
const mongoose = require('mongoose')
const routes = express.Router()
const Details = require('../models/Details')
const slider = require('../models/slider')
const serviceM = require('../models/service')
const ContactM = require('../models/contact')
const detail = mongoose.model("details" , Details);
const sliderM = mongoose.model("slider" , slider);


//console.log(datadb);
routes.get('/' , (req,resp)=>{
    resp.send('this i from routes')
});
routes.get('/gallary' , async(req,resp)=>{
    const datadb = await detail.findOne({"_id":"64fa26914179a216634b63e4"});
    const service = await serviceM.find();
    resp.render('gallary',{datadb:datadb , service:service})
    
});
routes.get('/index' , async(req,resp)=>{
    const datadb = await detail.findOne({"_id":"64fa26914179a216634b63e4"})
    const slides = await sliderM.find();
    const service = await serviceM.find();
    // console.log(slides);
    // console.log(service);
    // console.log(datadb);
    resp.render('index', {datadb:datadb , slides:slides , service:service})
});

routes.post('/processform' , async(req,resp)=>{
    try{
        const data = await ContactM.create(req.body);
        console.log(req.body);
        resp.redirect('/user/index')
    }catch(e){
        console.log(e);
        resp.redirect('/user/index')
    }
})
// routes.post('/process-contact-form', (req, resp)=>{
//     console.log("form is submitted");
//     console.log(req.body);
// })
module.exports = routes;