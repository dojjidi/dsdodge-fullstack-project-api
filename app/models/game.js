const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  map: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  kda: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
