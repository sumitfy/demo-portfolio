const express = require ('express')
const mongoose= require('mongoose')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const Detail = require('./models/Details')
const slider = require('./models/slider')
const routes = require('./routes/main')
const serviceM = require('./models/service')

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({
//     extended:true
// }))
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine' , 'hbs');
app.set("views","views")
app.use('/static',express.static("public"))
hbs.registerPartials("views/partials")
app.get("/", (req,resp)=>{
    resp.send("this is working")
});
app.get('/index' , (req,resp)=>{
    resp.render('index.hbs')
})
mongoose.connect("mongodb://localhost:27017/website_tut")
const detail = mongoose.model("details" , Detail);
const sliderM = mongoose.model("sliders" , slider);
// const sliderdata = ([
//     {
//         sliderImage:"/static/image/s1.png",
//         sliderh1 :"first Image ",
//         sliderp:"first Image"
//     },
//     {
//         sliderImage:"/static/image/s2.png",
//         sliderh1 :"second Image ",
//         sliderp:"second Image"
//     },
//     {
//         sliderImage:"/static/image/s3.png",
//         sliderh1 :"Third Image ",
//         sliderp:"Third Image"
//     }
// ])

// const detail1 = ({
//     brandURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/640px-Flower_poster_2.jpg",
//     brandName:'My project',
//     links:[
//         {
//             name:'Home',
//             URL:'/'
//         },
//         {
//             name:'Services',
//             URL:'/services'
//         },
//         {
//             name:'gallary',
//             URL:'/gallary'
//         },
//         {
//             name:'About',
//             URL:'/about'
//         },
//         {
//             name:'Contact',
//             URL:'/contact'
//         }
//     ]
// })
// const servisedata = ([
//     {
//         icon:'fa-brands fa-circle',
//         title:'Tittle 1',
//         description:'ljvjndbvdsnvsvlndsnvcsnc',
//         linktext:'check',
//         link:'www.google.com'
//     },
//     {
//         icon:'fa-brands fa-dropbox fa-bounce ',
//         title:'Titte 2',
//         description:'dh,ds,djdjhgjhdhgjhgdjdsjhsjdhjd',
//         linktext:'learn',
//         link:'www.linkedin.com'
//     },
//     {
//         icon:'fa-solid fa-phone',
//         title:'Tittle 3',
//         description:'jhsajdkasbdklhjshdkjshdkjhasd',
//         linktext:'link3',
//         link:'www.codewithharry.com'
//     },

// ])
// detail.insertMany(detail1);
// sliderM.insertMany(sliderdata);
// serviceM.insertMany(servisedata);
app.use('/user',routes);
app.listen(5556,()=>{
    console.log("app is running")
});