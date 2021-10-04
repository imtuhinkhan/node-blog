const Blog = require('../models/Blog');
const Category = require('../models/Category');

exports.Homepage = async(req,res,next) => {
    const slideBlock = await Blog.find().sort({'createdAt': -1}).limit(5).populate('cat').exec()
    const onNewspaper = await Blog.find({ "newsCategory": { "$in": [ "5f6514dd059d0b4178209625" ] } }).sort({'createdAt': -1}).limit(5).populate({
        path:'cat',
    }).exec()
    const politics = await Blog.find({ "newsCategory": { "$in": [ "5f6514ee059d0b4178209626" ] } }).sort({'createdAt': -1}).limit(6).populate({
        path:'cat',
    }).exec()

    const feature = await Blog.find({ "newsCategory": { "$in": [ "5f6514d6059d0b4178209624" ] } }).sort({'createdAt': -1}).limit(3).populate({
        path:'cat',
    }).exec()

    const communication = await Blog.find({ "newsCategory": { "$in": [ "5f67927f15882437b46586c5" ] } }).sort({'createdAt': -1}).limit(3).populate({
        path:'cat',
    }).exec()

    const education = await Blog.find({ "newsCategory": { "$in": [ "5f678ce315882437b46586c1" ] } }).sort({'createdAt': -1}).limit(3).populate({
        path:'cat',
    }).exec()

    const people = await Blog.find({ "newsCategory": { "$in": [ "5f7a0b1509c0a76f8c0834d7" ] } }).sort({'createdAt': -1}).limit(9).populate({
        path:'cat',
    }).exec()

    const place = await Blog.find({ "newsCategory": { "$in": [ "5f651565059d0b417820962a" ] } }).sort({'createdAt': -1}).limit(9).populate({
        path:'cat',
    }).exec()
    res.send({
        title:'Daily Bajitpur',
        category:req.category,
        moment:req.moment,
        ads:req.ads,
        onNewspaper,
        slideBlock,
        politics,
        feature,
        communication,
        education,
        people,
        place
    });
};

exports.test = async(req,res,next) => {
    res.send({
        title:'Daily Bajitpur',
        category:req.category,
        moment:req.moment
    });
};

exports.singleBlog = async(req,res,next) => {
    try{
        const slug = req.params.id;
        const singleBlock = await Blog.findOne({slug}).populate('cat').exec()
        const slideBlock = await Blog.find().sort({'createdAt': -1}).limit(5).populate('cat').exec()
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if(!singleBlock){
            res.redirect('/')
        }
        singleBlock.viewCount =singleBlock.viewCount+1
        singleBlock.save()
        res.send({
            title:' Daily Bajitpur',
            moment:req.moment,
            category:req.category,
            singleBlock,
            slideBlock,
            ads:req.ads,
            fullUrl

        });
    }catch(e){
        console.log(e)
    }
};

exports.categoryWiseBlog = async(req,res,next) => {
    const slug = req.params.id;
    var perPage = 14
    var page = req.query.page || 1
    // 
    try{
        const category = await Category.findOne({slug}).populate('cat').exec()
        const total =  await Blog.find({ "newsCategory": { "$in": [ category._id ] }})
        const categoryWise = await Blog.find({ "newsCategory": { "$in": [ category._id ] }})
        .sort({'createdAt': -1})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        res.send({
            title:' Daily Bajitpur',
            category:req.category,
            moment:req.moment,
            categoryWise,
            catDetails:category,
            current: page,
            pages: Math.ceil(total.length / perPage),
            ads:req.ads  
        });
    }catch(e){
        console.log(e)
    }
    
};

exports.search = async(req,res,next) => {
    const slug = req.query.key;
    console.log(slug)
    try{
        const categoryWise = await Blog.find({"title": { $regex: '.*' + slug + '.*' }})
       console.log(categoryWise)
        res.send({
            title:' Daily Bajitpur',
            category:req.category,
            moment:req.moment,
            categoryWise,
            ads:req.ads
     
        });
    }catch(e){
        console.log(e)
    }
};