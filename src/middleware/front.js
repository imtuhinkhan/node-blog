const Category = require('../models/Category')
const moment = require('moment')

const cat = async (req,res,next)=>{
    try{
        const category = await Category.find().populate({
            path:'child',
            match:{ parent: { $eq: null }}
        }).exec()
        req.category = category
        req.moment = moment
        next()

    }catch(e){
        res.status(500).send('Something went wrong')
    }
}
module.exports = cat