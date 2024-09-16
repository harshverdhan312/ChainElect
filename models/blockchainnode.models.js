const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockchainNodeSchema = new Schema({
  node_id: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  data_stored: {
    type: String,
    required: true
  },
  active_status: {
    type: Boolean,
    required: true
  },
  replication_factor: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('BlockchainNode', BlockchainNodeSchema);
