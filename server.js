import express from 'express';
import { engine } from 'express-handlebars';
import * as fs from 'fs';
const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: 'hbs'
})); //all files with .hbs at the end go through express-handlebars

app.set('view engine', 'hbs');
//express automatically looks for a folder called "views", so when res.render('home') is called, it goes looking through views/home.bs
//when the file is found, use the engine to process them to HTML

app.get('/', (req, res) => {
    fs.readFile('article_data/articles.json', 'utf-8', (err, data) => {
        if(err) return res.status(500).send('Server error');

        const { articles } = JSON.parse(data);

        res.render('home', { 
            title: 'Finance Tips Home Page',
            jsFile: 'index.bundle.js',
            heroTitle: 'Scale Your Financial Future',
            heroSmallText: 'Simple, practical tips to help you save, invest, and build wealth.',
            heroLabel: 'man looking at mountains while standing at a high point',
            heroImage: '/images/hbs hero image.avif',
            heroImagePosition: 'center',
            trendingTips: articles.slice(5),
        });
    });

});
//since .set automaically looks in the views folder for hbs files, we are saying when someone visits this link, to render home.hbs and inject it into main.hbs where {body} is
//res.render is specifically used with the view engine

app.get('/all-tips', (req, res) => {
    fs.readFile('article_data/articles.json', 'utf-8', (err, data) => {
        if(err) return res.status(500).send('Server error');

        const { articles } = JSON.parse(data);

        res.render('all-tips', {
            title: 'All Tips',
            jsFile: 'allTips.bundle.js',
            heroTitle: 'Explore All Our Tips',
            heroSmallText: 'From budgeting basics to investment strategies, find the advice that fits your life.',
            heroLabel: 'person sitting in front a computer, smiling and looking at figures and charts',
            heroImage: '/images/all-tips-hero.jpg',
            heroImagePosition: 'top center',
            allTipsCards: articles
        });
    });
});

app.get('/tips/:slug', (req, res) => {
    fs.readFile('article_data/articles.json', 'utf-8', (err, data) => {
        if(err) return res.status(500).send('Server error');

        const { articles } = JSON.parse(data);
        const tip = articles.find(t => t.slug === req.params.slug);

        if(!tip) return res.status(404).render('404', { title: 'Page Not Found', heroImage: '/images/404img.jpg', heroLabel: 'black background with a pink 404 in the middle', heroImagePosition: 'center', whiteTitle: true,});

        const randomCards = articles
            .filter(a=> a.slug !== tip.slug)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        res.render('article', {
            layout: 'article-layout',
            title: tip.tipTitle,
            articleTitle: tip.tipTitle,
            articleImage: tip.image,
            randomCards,
        });
    });
});

app.use(express.static('public')); //to render static files like CSS, images, client-side JS bundle

app.use((req, res) => {
    res.status(404).render('404', { 
        title: 'Page Not Found', 
        heroImage: '/images/404img.jpg', 
        heroLabel: 'black background with a pink 404 in the middle', 
        heroImagePosition: 'center',
        whiteTitle: true,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});