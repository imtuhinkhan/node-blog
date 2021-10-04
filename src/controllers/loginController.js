const User = require('../models/User')
exports.Loginpage = (req,res,next) => {
    res.render('login', {
        title:'Daily Bajitpur'
    });
};

exports.postLogin = async(req,res,next) => {
    try{
    const user = await User.findByCredential(req.body.email,req.body.password)
        if(user){
            req.session.isLoggedIn = true;
            req.session.user = user;            
            res.redirect('/admin/dashboard');
        }
    }catch(e){
        console.log(e)
    }
    
};

exports.userLogout = (req,res,next) => {
    req.session.destroy(()=>{
        res.redirect('/');
    })
};