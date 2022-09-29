// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', (req, res) => {
  res.send(`<h1> 99 bottles of beer on the wall</h1>
          <a href="/98">Take one down, pass it around</a>`)
});

app.get('/:id', (req, res) => {
if (req.params.id < 1) {
   res.send(`<h1>${req.params.id} bottles of beer on the wall</h1>`)
} else {
  res.send(`<h1>${req.params.id} bottles of beer on the wall</h1>
  <a href="/${req.params.id - 1}">Take one down, pass it around</a>`)
}

});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});