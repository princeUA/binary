const db = require('mongoose');

const Recipe = db.Schema({
  id: db.Schema.Types.ObjectId,
  name: String,
  description: String
});

module.exports = db.model('Recipe', Recipe);
