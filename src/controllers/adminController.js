const User = require('../models/User')
const Blog = require('../models/Blog')


exports.adminDashboard = async(req,res,next) => {
    const totalBlog = await Blog.find({})
    
    res.render('admin/dashboard', {
        title:'Daily Bajitpur',
        breadcrumb:'Dashboard',
        totalBlog
    });
};



exports.allMedia = (req,res,next) => {
    res.render('admin/blank', {
        title:'Daily Bajitpur'
    });
};

exports.googleAds = (req,res,next) => {
    res.render('admin/blank', {
        title:'Daily Bajitpur'
    });
};

exports.allUsers = async(req,res,next) => {
    const users = await User.find()
    res.render('admin/user', {
        title:'Daily Bajitpur',
        users
    });
};

exports.addUsers = (req,res,next) => {
    res.render('admin/userForm', {
        title:'Daily Bajitpur'
    });
};

exports.saveUsers = async(req,res,next) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username
    const avatar = req.file.path
    try{
        const user = new User({name,email,password,username,avatar});
        await user.save()
        res.redirect('/admin/user');
    }catch(err){
        res.status(400).send(err)
    }
};


