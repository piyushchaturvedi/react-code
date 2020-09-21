const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  radios: {
    type: String,
    default: null
  },
  cricket:{
    type:String,
    default:null
  },
  football:{
    type:String,
    default:null
  },
  created_at: {
    type: String,
    default: Date.now
  }
});


const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;