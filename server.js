import express from 'express';
import { engine } from 'express-handlebars';
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
    res.render('home', { 
        title: 'Finance Tips Home Page', 
        tips: [
            { image: '/images/card-img-investing-early.jpg', imageLabel: 'image showing different stock prices on a dark blue background', tipTitle: 'Start Investing Early for Long-Term Wealth', badge: 'Investing'},
            { image: '/images/card-credit.avif', imageLabel: 'Scrabble pieces scattered with the word "credit" spelled out in the middle', tipTitle: 'Building your Credit Score', badge: 'Credit'},
            { image: '/images/card-retirement.jpg', imageLabel: 'two professionally dressed people happy and smiling while giving each other a high-five', tipTitle: '401k, IRA, or Annuity: Which Wins?', badge: 'Retirement'},
            { image: '/images/card-50-30-20.jpg', imageLabel: 'person in a blue shirt with three stacks of coins, adding more to one pile', tipTitle: 'The 50/30/20 Budgeting Rule', badge: 'Budgeting'},
        ]
    })
});
//since .set automaically looks in the views folder for hbs files, we are saying when someone visits this link, to render home.hbs and inject it into main.hbs where {body} is
//res.render is specifically used with the view engine


app.use(express.static('public')); //to render static files like CSS, images, client-side JS bundle

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});