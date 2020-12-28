const express = require('express');
const app = express();
const port =5000;
//use express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log(`error in running server is ${err}`);
    }
    console.log(`express server is running on port ${port}`);
})