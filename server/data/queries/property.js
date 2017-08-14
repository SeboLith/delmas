const { GraphQLString } = require('graphql');

const getProjection = require('../../utils/projection');
const PropertyType = require('../types/property');
const Property = require('../models/property');

module.exports = {
  type: PropertyType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    }
  },
  resolve(root, { id }, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Property.findById(id)
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
