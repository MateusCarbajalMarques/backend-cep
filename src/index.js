const express = require('express');
const routes =  require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, function() {
    console.log('Exmple app listening on port 300!');
})
