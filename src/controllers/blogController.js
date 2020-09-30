const Category = require('../models/Category')
const Blog = require('../models/Blog')


exports.allBlog = async(req,res,next) => {
    const blog = await Blog.find().populate('cat').sort({'createdAt': -1}).exec()
    try{
        res.render('admin/blogList', {
            title:'Daily Bajitpur',
            blog
        });
    }catch(e){
        console.log(e)
    }    
};

exports.newsForm = async(req,res,next) =>{
    const category = await Category.find({})
    try{
        res.render('admin/newsAddForm', {
            title:'Daily Bajitpur',
            category,
            oldBlog:null
        });
    }catch(e){
        console.log(e)
    }    
}

exports.newsSave = async(req,res,next) =>{ 
    const title = req.body.title;
    const description = req.body.description;
    const newsCategory = req.body.category;
    const metaTag = req.body.tag;
    const metaDescription = req.body.metaDescription;
    const imagePath = req.file;
    const slug = title.replace(/\s/g, '-'); 
    if(req.body.cid){
        const _id = req.body.cid;
        const blog = await Blog.findByIdAndUpdate(_id,{title,description,slug,newsCategory,metaTag,metaDescription});
        if(imagePath)
        {
            blog.image= imagePath.path
        }
        try{
            await blog.save();
            return res.redirect('/admin/blogs')
        }catch(e){
            console.log(e)
        }
    }
    else{        
        const blog = new Blog({title,description,slug,newsCategory,metaTag,metaDescription});
        if(imagePath)
        {
            blog.image= imagePath.path
        }
        try{
            await blog.save();
            return res.redirect('/admin/blogs')
        }catch(e){
            console.log(e)
        }
    }    
}

exports.deleteBlog = async(req,res,next)=>{
        const _id = req.params.id
    const blog = await Blog.findByIdAndDelete({_id})
    try{
        res.redirect('/admin/blogs');
    }catch(e){
        console.log(e)
    }
}

exports.editBlog = async(req,res,next)=>{
    const _id = req.params.id
    try{
        const oldBlog = await Blog.findOne({_id})
        const category = await Category.find({})
            res.render('admin/newsAddForm', {
                title:'Daily Bajitpur',
                oldBlog,
                category
            });
    }catch(e){
        console.log(e)
    }
}

