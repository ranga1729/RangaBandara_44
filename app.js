const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
const mongoose = require('mongoose');

const Recipe = require('./models/recipe');

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://localhost:27017/recipeWeb');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected!");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//routes
app.get('/', async(req, res) => {
    try{
        const DBdata = await Recipe.find({});
        res.render('home', {DBdata});
    }catch(error){
        res.render('home2.ejs');
    }
    
});

app.get('/login', async(req, res) => {
    res.render('login');
});

app.get('/addNewRecipe', async(req, res) => {
    res.render('addNewRecipe');
});

app.post('/newRecipe', async(req, res) => {
    const formData = new Recipe(req.body);
    await formData.save();
    res.redirect('/');
})

/*app.get('/:id', async(req, res) => {
    const recipeData = await Recipe.findById(req.params.id);
    res.render('viewRecipe', {recipeData});
});*/

app.listen(3000, () => {
    console.log("Listening to port 3000");
})