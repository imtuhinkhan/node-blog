const mongoose= require('mongoose');
const validator= require('validator');
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true

    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(validator.equals(value,'password')){
                 throw new Error('You cant not use this word')
            }
        }
    },
    avatar:{
        type: String,
        default:null
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    
}, {
    timestamps:true
})

userSchema.methods.webToken  = async function(){
    const token = jwt.sign({_id:this._id.toString()},process.env.JWT_SECRTE)
    this.tokens =this.tokens.concat({token})
    await this.save()
    return token
}

userSchema.statics.findByCredential = async (email,password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('No User Found')
    }
    const isMatch = await bcryptjs.compare(password,user.password)
    if(!isMatch){
        throw new Error('Invalid Password')
    }
    return user
}

userSchema.methods.toJSON = function(){
    const userObject = this.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password,8)
    }
    next()
})



const User = mongoose.model('Users',userSchema)

module.exports = User