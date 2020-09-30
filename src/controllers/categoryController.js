const Category = require('../models/Category')
const makeSlug = require('url-slug')
exports.newsCategory = async(req,res) => {
    const category = await Category.find().populate({
        path:'parentCat',
        match:{ _id: { $ne: null }}
    }).exec()
    try{
        res.render('admin/category', {
            title:'Daily Bajitpur',
            error:null,
            category,
            hasCategory:category.length > 0,
            oldCategory:null
        });
    }catch(e){
        console.log(e)
    }
    
};

exports.addCategory = async(req,res,next) => {
    const title = req.body.title;
    const parent = req.body.parent;
    const image = req.body.image;
    // const slug = makeSlug(req.body.title,{separator: '-',
    // transformer: makeSlug.transformers.titlecase});
    const slug = title.replace(/\s/g, '-');
    if(req.body.cid){
        const _id = req.body.cid;
        const category = await Category.findByIdAndUpdate(_id,{title,parent,slug,image})
        
        try{
            await category.save()
            res.redirect('/admin/category');
        }catch(e){
            const parentCat = await Category.find()
                res.status(400).render('admin/category',{
                title:'Category',
                error:e,
                hasCategory: parentCat.length>0,
                category:parentCat,
                oldCategory:null
                });
        }       
    }else{
        const category = new Category({title,parent,slug,image});
        try{
            await category.save()
            res.redirect('/admin/category');
        }catch(e){
            const parentCat = await Category.find()
            res.status(400).render('admin/category',{
                title:'Category',
                error:e,
                hasCategory: parentCat.length>0,
                category:parentCat,
                oldCategory:null
            });
        }
    }

    
    
};

exports.editCategory=async(req,res)=>{
    const _id = req.params.id
    
    try{
        const oldCategory = await Category.findOne({_id})
        if(!oldCategory){
            res.render('404', {
                title:'Daily Bajitpur'
            })
        }
        const category = await Category.find().populate({
            path:'parentCat',
            match:{ _id: { $ne: null }}
        }).exec()
        res.render('admin/category', {
            title:'Daily Bajitpur',
            error:null,
            category,
            hasCategory:category.length > 0,
            oldCategory:oldCategory
        });
    }catch(e){
        console.log(e)
    }
};

exports.deleteCategory = async(req,res) =>{
    const _id = req.params.id
    const category = await Category.findByIdAndDelete({_id})
    try{
        res.redirect('/admin/category');
    }catch(e){
        console.log(e)
    }


}