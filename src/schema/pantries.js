const mongoose = require("mongoose");

const pantrySchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        unique: true,
        minLength: 3
    }, 
    basket_key: {
        type: String, 
        required: true,
        unique: true
        
    },
    type:{
        type: String,
        required : true,
    }
});

const pantry = new mongoose.model("Pantry", pantrySchema);

module.exports = pantry;