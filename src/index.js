const template = require('./templates/home.hbs');

const html = template({
    title: 'Finance Tips',
    description: 'Welcome to the finance tips site.',
});

document.body.innerHTML = html;