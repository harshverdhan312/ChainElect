const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoterSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  digital_identity: {
    type: String,
    required: true
  },
  registration_status: {
    type: Boolean,
    required: true
  },
  voted_status: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Voter', VoterSchema);
