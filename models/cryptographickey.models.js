const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CryptographicKeySchema = new Schema({
  crypto_id: {
    type: String,
    required: true,
    unique: true
  },
  voter_id: {
    type: String,
    required: true,
    ref: 'Voter'
  },
  public_key: {
    type: String,
    required: true
  },
  private_key: {
    type: String,
    required: true
  },
  encryption_algorithm: {
    type: String,
    required: true
  },
  key_generation_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CryptographicKey', CryptographicKeySchema);
