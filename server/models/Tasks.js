const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tasksSchema = new Schema({
  name: String,
  Task: [
    {name: String},
    {time: Number}
  ],
  creatorId: { type : Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Tasks = mongoose.model('Sandwich', tasksSchema);
module.exports = Tasks;