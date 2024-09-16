const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VotingBallotSchema = new Schema({
  ballot_id: {
    type: String,
    required: true,
    unique: true
  },
  voter_id: {
    type: String,
    required: true,
    ref: 'Voter'
  },
  vote_data: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  validation_status: {
    type: Boolean,
    required: true
  },
  vote_type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('VotingBallot', VotingBallotSchema);
