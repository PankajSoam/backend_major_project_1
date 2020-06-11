const express = require('express');
const app = express();
const port = 8000;

//use express router

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('error:', err); //instead of this line we can use console.log(`error in running the server : ${err}`);
    }
    console.log(`server is ruuning on port: ${port}`);
});