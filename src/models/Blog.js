const mongoose= require('mongoose');
const validator= require('validator');
const Category = require('../models/Category')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        trim:true,
        default:null
    },
    slug:{
        type:String,
        trim:true
    },
    newsCategory:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
      }],
    metaTag:{
        type:String,
        default:null
    },
    metaDescription:{
        type:String,
        default:null
    },
    image:{
        type:String,
        default:null
    }, 
    viewCount:{
        type:Number,
        default:0
    }

}, {
    timestamps:true
})
blogSchema.virtual('cat',{
    ref:'Category',
    localField:'newsCategory',
    foreignField:'_id'
})
const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog
