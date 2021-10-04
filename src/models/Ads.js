const mongoose= require('mongoose');
const validator= require('validator');

const adsSchema = new mongoose.Schema({
    header_add:{
        type:String,
        default:null
    },
    home_sidebar_1:{
        type:String,
        default:null
    },
    home_sidebar_2:{
        type:String,
        default:null
    },
    home_sidebar_3:{
        type:String,
        default:null
    },
    home_long:{
        type:String,
        default:null
    },
    home_horizontal:{
        type:String,
        default:null
    },
    category_1:{
        type:String,
        default:null
    },
    category_2:{
        type:String,
        default:null
    },
    category_3:{
        type:String,
        default:null
    },
    single_sidebar:{
        type:String,
        default:null
    },
    single_bottom:{
        type:String,
        default:null
    },
    in_article:{
        type:String,
        default:null
    },
    search:{
        type:String,
        default:null
    },
    footer:{
        type:String,
        default:null
    }  

}, {
    timestamps:true
})
const Ads = mongoose.model('Ads',adsSchema)
module.exports = Ads
