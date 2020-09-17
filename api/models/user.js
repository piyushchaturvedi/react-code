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
  gender: {
    type: String,
    default: null
  },
  hobbies:{
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