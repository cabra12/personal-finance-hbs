const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const PORT = 3000;

app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
})); //all files with .hbs at the end go through express-handlebars
app.set('view engine', 'hbs');
//express automatically looks for a folder called "views", so when res.render('home') is called, it goes looking through views/home.bs
//when the file is found, use the engine to process them to HTML

app.get('/', (req, res) => {
    res.render('home', { title: 'Finance Tips Home Page'})
});
//since .set automaically looks in the views folder for hbs files, we are saying when someone visits this link, to render home.hbs and inject it into main.hbs where {body} is
//res.render is specifically used with the view engine


app.use(express.static('public')); //to render static files like CSS, images, client-side JS bundle

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});