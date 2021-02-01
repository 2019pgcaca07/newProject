const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port =5000;

//use express router
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

//use for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');





app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

//extract styles and scripts from sub pages into the layout.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


//mongo store is used to store the session cookie in the db
app.use(session({
      name:'newProject',
      //TODO change the secret before deployment in production mode
      secret:'blahsomething',
      saveUninitialized:false,
      resave:false,
      cookie:{
          maxAge: (1000*60*100)

      },
      store: new MongoStore(
          {
        
              mongooseConnection: db,
              autoRemove: 'disabled'
        
          },
          function(err){
              console.log(err || 'connect-mogodb setup is ok');
          }
       )

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);


//use express router
app.use('/',require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log(`error in running server is ${err}`);
    }
    console.log(`express server is running on port ${port}`);
})