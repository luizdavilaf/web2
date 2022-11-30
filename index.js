const express = require('express');
const app = express();
const session = require('express-session');
const sync = require('./src/models/sync')



app.use(express.static('public'));
app.set('view engine', 'ejs');  
app.set('views', 'src/views');  
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(session({
    secret: 'SEGREDO DA APLICACAO, SE VAZAR DA RUIM',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true } - FOR PRODUCTION
}));


const userRoutes = require('./src/routes/user-routes');
app.use('/users', userRoutes);

const postRoutes = require('./src/routes/post-routes');
app.use('/posts', postRoutes);

const homeRoutes = require('./src/routes/home-routes');
app.use('/', homeRoutes);


app.listen(3000, () => {
    console.log("SERVER STARTED AT 3000");
});