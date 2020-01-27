const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sanitizeHtml = require('sanitize-html');

const app = express();

const comments = [];

app.use(bodyParser());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"]
    }
}));
app.use((express.static('.')));

app.post('/comments', (request, response) => {
    const {comment} = request.body;
    comments.push(sanitizeHtml(comment));
    response.send('Saved!');
});

app.get('/comments', (request, response) => {
    response.json(comments);
});

app.listen('9000');