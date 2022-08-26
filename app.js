require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//serve static content
app.use( express.static('public') );

// app.get('/', function (req, res) {
//   res.render('home', {
//     name: 'Joaco',
//     title: 'Nodejs Course'
//   });
// });

// app.get('/generic', function (req, res) {
//   res.render('generic', {
//     name: 'Joaco',
//     title: 'Nodejs Course'
//   });
// });

// app.get('/elements', function (req, res) {
//   res.render('elements', {
//     name: 'Joaco',
//     title: 'Nodejs Course'
//   });
//   });


app.get('*', function (req, res) {
res.sendFile( __dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})