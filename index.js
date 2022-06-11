const express = require('express');
const app = express();

app.use(express.static('public'));




//handle 404
app.use(function (req, res, next) {
    res.status(404).sendFile('404.html', {root: 'public'})
  })


//Port and listen
const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})