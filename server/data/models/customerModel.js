const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Customer',
  new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String },
    age: { type: Number }
  })
);
