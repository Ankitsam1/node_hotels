const mongoose = require('mongoose');
const {Schema} =mongoose;
/* Creating the schema with name, email, password and date */
const UserSchema = new mongoose.Schema({
   
  name: { 
    type: String, 
    require: true
}, 
power_type: { 
    type: String, 
    require: true
}, 
mana_power: Number, 
health: Number, 
gold: Number 
}) 

  
  /* Exporting schema with collection as CrudOperations */
  const Person = mongoose.model('users', UserSchema);
  
  module.exports = Person;