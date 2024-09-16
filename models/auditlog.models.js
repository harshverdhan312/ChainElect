const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuditLogSchema = new Schema({
  log_id: {
    type: String,
    required: true,
    unique: true
  },
  election_id: {
    type: String,
    required: true,
    ref: 'Election'
  },
  transaction_id: {
    type: String,
    required: true,
    ref: 'Transaction'
  },
  log_event: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  validator_node_id: {
    type: String,
    required: true,
    ref: 'BlockchainNode'
  }
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);
