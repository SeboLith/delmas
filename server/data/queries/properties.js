const { GraphQLList } = require('graphql');

const getProjection = require('../../utils/projection');
const PropertyType = require('../types/property');
const Property = require('../models/property');

module.exports = {
  type: new GraphQLList(PropertyType),
  // no args required since all properties are returned
  resolve(root, args, source, fieldASTs) {
    return new Promise((resolve, reject) => {
      const projection = getProjection(fieldASTs);
      Property.find()
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};
