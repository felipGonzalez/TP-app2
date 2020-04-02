const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const port = 3000;
const api = require('./routes/api')
const app = express();

app.use(bodyParser.json()); 
app.use(cors())

app.use('/api', api)
console.log(new Date());

app.get('/', function(req,res){
    res.send("Hello from server")
});


app.listen(port, function(){
    console.log(`Server running on localhost ${port}`);
});