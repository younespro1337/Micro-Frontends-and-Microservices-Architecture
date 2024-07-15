const mongoose = require('mongoose');

const MicroUsersSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},
})

const MicroUsers = mongoose.model('MicroUsers', MicroUsersSchema);

module.exports = MicroUsers;

