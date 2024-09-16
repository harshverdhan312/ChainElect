const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  electionId: {
    type: String,
    required: true,
    ref: 'Election'
  }
});

module.exports = mongoose.model('Candidate', CandidateSchema);
