const Ads = require('../models/Ads')
exports.googleAds = async(req,res,next) => {
    const ads = await Ads.findOne();
    res.render('admin/ads', {
        title:'Daily Bajitpur',
        ads
    });
};

exports.googleAdsSave = async(req,res,next) =>{
    try{ const _id = req.body.ad_id;
        if(req.body.ad_id){
            const _id = req.body.ad_id;
            console.log(req.body);
            const ads = await Ads.findByIdAndUpdate(_id,{$set:req.body});
        }
        else{
            const ads = new Ads(req.body).save();
        }
        res.redirect('/admin/ads');

    }catch(e){
        res.redirect('/admin/ads');
    }
}