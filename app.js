const express = require('express'); //import express


const app = express(); // import express server and initalise the server
app.set('view engine', 'ejs');

app.listen(3000); // listener

const messages = [{
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req,res) => {
    res.render('index', {title: "Mini Message board", messages:messages})
    console.log(new Date())
});

app.get('/new', (req, res) => {
    res.render('form')
});

app.use(express.urlencoded()); // allows us to access the body of the post request. This gives us the data from the form submission. 

app.post('/new', (req, res) => {
    console.log(req.body)
    const messageSubmission = {
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    };
    messages.push(messageSubmission)
    console.log(messages)
    res.redirect('/')
}); 
app.use( (req, res) => {
    res.status(404).render('404');
});
