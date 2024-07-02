const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        default:'waiter'
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;