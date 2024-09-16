const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  transaction_id: {
    type: String,
    required: true,
    unique: true
  },
  voter_id: {
    type: String,
    required: true,
    ref: 'Voter'
  },
  ballot_id: {
    type: String,
    required: true,
    ref: 'VotingBallot'
  },
  transaction_hash: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  block_id: {
    type: String,
    required: true,
    ref: 'BlockchainNode'
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
