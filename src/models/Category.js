const mongoose= require('mongoose');
const validator= require('validator');
const cateorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        trim:true,
        default:null,
        ref:'Category'
    },
    slug:{
        type:String,
        trim:true,
        default:null
    },
    image:{
        type:String,
        default:false
    },

}, {
    timestamps:true
})

cateorySchema.virtual('parentCat',{
    ref:'Category',
    localField:'parent',
    foreignField:'_id'
})

cateorySchema.virtual('child',{
    ref:'Category',
    localField:'_id',
    foreignField:'parent'
})

const Category = mongoose.model('Category',cateorySchema)
module.exports = Category
