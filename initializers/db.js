exports.db = function(api, next) {
  api.db = require("monk")("localhost/test");
  next();
}
