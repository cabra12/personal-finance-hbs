const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
//when someone visits /, express sends back index.html, which then loads bundle.js and runs the handlebars template

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});