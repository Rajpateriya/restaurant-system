const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    taste:{
        type:String,
        enum:['sweet' ,'salty', 'spicy']
    }
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;