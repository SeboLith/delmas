const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tenant = require('./tenant');

const propertySchema = new Schema({
  number: { type: String, required: true },
  unit: { type: String, required: false },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }],
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now }
});

propertySchema.pre('save', function(next) {
  if (this.isNew) {
    this.created_at = new Date();
  }
  this.updated_at = new Date();
  next();
});

propertySchema.statics.addTenant = function(id, tenantId) {
  return this.findById(id).then(property => {
    property.tenants.push(tenantId);
    return property.save().then(property => property);
  });
};

propertySchema.statics.findTenants = function(id) {
  return this.findById(id)
    .populate('Tenants')
    .then(property => property.tenants);
};

module.exports = mongoose.model('Property', propertySchema);
