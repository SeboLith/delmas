const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});

tenantSchema.pre('save', function(next) {
  if (this.isNew) {
    this.created_at = new Date();
  }
  this.updated_at = new Date();
  next();
});

module.exports = mongoose.model('Tenant', tenantSchema);
