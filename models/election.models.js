const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElectionSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Election', ElectionSchema);
