const { GraphQLNonNull } = require('graphql');

const PropertyType = require('../types/property');
const Property = require('../models/property');
const PropertyInputType = require('../types/input/property');

module.exports = {
  type: PropertyType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(PropertyInputType)
    }
  },
  resolve(root, { data }) {
    return new Promise((resolve, reject) => {
      const newProperty = new Property(data);

      newProperty.save().then(data => resolve(data)).catch(err => reject(err));
    });
  }
};
