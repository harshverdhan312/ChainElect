const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteTallySchema = new Schema({
  tally_id: {
    type: String,
    required: true,
    unique: true
  },
  election_id: {
    type: String,
    required: true,
    ref: 'Election'
  },
  total_votes: {
    type: Number,
    required: true
  },
  candidate_votes: {
    type: String,
    required: true
  },
  tally_status: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('VoteTally', VoteTallySchema);
