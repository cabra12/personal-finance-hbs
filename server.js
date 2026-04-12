import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const PORT = 3000;

const articles = [
    {
        slug: 'renting-vs-buying',
        image: '/images/all-tips-rvb.jpg',
        imageLabel: 'family with children sitting on a bed, just moved in',
        tipTitle: 'Renting vs. Buying a Home in the Current Economy', 
        badge: 'Housing'
    },
    {
        slug: 'tax-deductions',
        image: '/images/all-tips-tax.jpg',
        imageLabel: 'aerial view of a person on a computer with a pad of paper and pen besides them',
        tipTitle: 'Tax Deductions You Might Be Missing',
        badge: 'Taxes'
    },
    {
        slug: 'start-investing-early',
        image: '/images/card-img-investing-early.jpg', 
        imageLabel: 'image showing different stock prices on a dark blue background', 
        tipTitle: 'Start Investing Early for Long-Term Wealth',
        badge: 'Investing'
    },
    {
        slug: 'building-credit-from-zero',
        image: '/images/card-credit.avif', 
        imageLabel: 'Scrabble pieces scattered with the word "credit" spelled out in the middle', 
        tipTitle: 'Building your Credit Score From Zero',
        badge: 'Credit'
    }, 
    {
        slug: 'how-to-negotiate-salary',
        image: '/images/all-tips-salary.jpg', 
        imageLabel: 'Two people shaking hands, reaching an agreement', 
        tipTitle: 'How to Negotiate a Higher Salary',
        badge: 'Career'
    }, 
    {
        slug: 'understanding-credit-report',
        image: '/images/all-tips-report.jpg', 
        imageLabel: 'Computer screen displaying a credit score of 825', 
        tipTitle: 'Understanding Your Credit Report',
        badge: 'Credit',
    }, 
    {
        slug: '401k-vs-ira-vs-annuity',
        image: '/images/card-retirement.jpg', 
        imageLabel: 'two professionally dressed people happy and smiling while giving each other a high-five', 
        tipTitle: '401k, IRA, or Annuity: Which is Right for You?',
        badge: 'Retirement'
    },
    {
        slug: 'basics-index-fund-investing',
        image: '/images/all-tips-index.avif', 
        imageLabel: 'A computer showing a graph of the growth of a stock', 
        tipTitle: 'The Basics of Index Fund Investing',
        badge: 'Investing'
    },
    {
        slug: '50-30-20-rule',
        image: '/images/card-50-30-20.jpg', 
        imageLabel: 'person in a blue shirt with three stacks of coins, adding more to one pile', 
        tipTitle: 'How the 50/30/20 Rule Can Help Your Budget',
        badge: 'Budgeting'
    },
];

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
        jsFile: 'index.bundle.js',
        heroTitle: 'Take Control of Your Money',
        heroSmallText: 'Simple, practical tips to help you save, invest, and build wealth.',
        heroLabel: 'man looking at mountains while standing at a high point',
        heroImage: '/images/hbs hero image.avif',
        heroImagePosition: 'center',
        trendingTips: articles.slice(5),
    });
});
//since .set automaically looks in the views folder for hbs files, we are saying when someone visits this link, to render home.hbs and inject it into main.hbs where {body} is
//res.render is specifically used with the view engine

app.get('/all-tips', (req, res) => {
    res.render('all-tips', {
        title: 'All Tips',
        jsFile: 'allTips.bundle.js',
        heroTitle: 'Explore All Our Tips',
        heroSmallText: 'From budgeting basics to investment strategies, find the advice that fits your life.',
        heroLabel: 'person sitting in front a computer, smiling and looking at figures and charts',
        heroImage: '/images/all-tips-hero.jpg',
        heroImagePosition: 'top center',
        allTipsCards: articles,
    });
});

app.get('/tips/:slug', (req, res) => {
    const tip = articles.find(t => t.slug === req.params.slug);
    res.render('article', {
        layout: 'article-layout',
        title: tip.tipTitle,
    });
});

app.use(express.static('public')); //to render static files like CSS, images, client-side JS bundle

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});