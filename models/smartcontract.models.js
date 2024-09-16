const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmartContractSchema = new Schema({
  contract_id: {
    type: String,
    required: true,
    unique: true
  },
  election_id: {
    type: String,
    required: true,
    ref: 'Election'
  },
  contract_code: {
    type: String,
    required: true
  },
  contract_status: {
    type: String,
    required: true
  },
  deployment_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SmartContract', SmartContractSchema);
