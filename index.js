const express = require('express');
const app = express();
const port =5000;




app.listen(port,function(err){
    if(err){
        console.log(`error in running server is ${err}`);
    }
    console.log(`express server is running on port ${port}`);
})