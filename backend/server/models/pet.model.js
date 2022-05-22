const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { 
        //must be unique, otherwise show error: "Name must be unique"
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [20, 'Name must be at most 50 characters long'],


     },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minlength: [3, 'Type must be at least 3 characters long'],
        maxlength: [20, 'Type must be at most 50 characters long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be at least 3 characters long'],
        maxlength: [50, 'Description must be at most 50 characters long']
    },
    //pet skill, not required
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
        
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);



