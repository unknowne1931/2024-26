const mongoose = require('mongoose');

const evebtSchema = new mongoose.Schema({
      
  Time : String,
  image : String,
  gf : String,

});
  
module.exports = mongoose.model('google_form', evebtSchema);
