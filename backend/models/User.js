const mongoose = require('mongoose');
const { Schema } = mongoose

const UserSchema = new Schema({
   name:{
    type: String,
    requried: true
   },
   email:{
    type: String,
    requried: true,
    unique: true
   },
   password:{
    type: String,
    requried: true
   },
   date:{
    type: Date,
    requried: Date.now
   },
  });

  module.exports = mongoose.model('user', UserSchema);