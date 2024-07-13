const mongoose = require('mongoose');

const MicroUsersSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:trusted,
},
})

const MicroUsers = mongoose.model('MicroUsers', MicroUsersSchema);

module.exports = MicroUsers;

