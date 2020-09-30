const express = require('express')
const app = express();
const path = require('path')
const userRouter = require('./routers/userRouter')
const adminRouter = require('./routers/adminRouter')
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf')
const csrfProtection = csrf();
const ckeditor = require('./routers/ckeditor')

require('./db/mongoose')
const storeSession = require('connect-mongodb-session')(session);
const store =storeSession({
    uri:process.env.MONGO_CONNECTION,
    collection:'sessions'
})
app.use(session({secret:'ilovedailybajitpur', resave:false, saveUninitialized:false, store: store}))

app.use(bodyParser.urlencoded({extended:false}));
app.use(userRouter)
app.use('/admin',adminRouter)
app.use(ckeditor)

app.set('view engine','ejs'); 
app.set('views','./src/views');

app.use(express.static(path.join(__dirname,'public')));
app.use('/src/public/images', express.static(path.join(__dirname, 'public/images')));


app.use('*',(req,res)=>{
    res.status(404).render('404')
})
module.exports = app