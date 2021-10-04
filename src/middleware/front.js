const Category = require('../models/Category')
const Ads = require('../models/Ads')
const moment = require('moment')

const cat = async (req,res,next)=>{
    try{
        const category = await Category.find().populate({
            path:'child',
            match:{ parent: { $eq: null }}
        }).exec()
        const ads = await Ads.findOne()
        req.category = category
        req.ads = ads
        req.moment = moment
        next()

    }catch(e){
        res.status(500).send('Something went wrong')
    }
}
module.exports = cat