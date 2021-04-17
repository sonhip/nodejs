module.exports = {
  multipleMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((obj) => obj.toObject());
  },
  mongooseToObject: function (objects) {
    return objects ? objects.toObject() : objects;
  },
};
