const express = require('express');
const app = express();

app.use(express.static('.'));

// app.get('/download', (request, response) => {
//     const files = [
//         'home.html',
//         'contact.html'
//     ];
//
//     const { page } = request.params;
//
//     if (!files.includes(page)) {
//         console.warn('Access denied!');
//         return;
//     }
//
//     response.end();
// });

app.listen(7000);