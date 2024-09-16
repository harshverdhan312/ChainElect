const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  voterId: {
    type: String,
    required: true,
    ref: 'Voter'
  },
  candidateId: {
    type: String,
    required: true,
    ref: 'Candidate'
  },
  electionId: {
    type: String,
    required: true,
    ref: 'Election'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vote', VoteSchema);
