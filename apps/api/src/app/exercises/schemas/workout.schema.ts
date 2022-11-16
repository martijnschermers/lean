import * as mongoose from 'mongoose';

export const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  prs: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  exercises: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Exercise',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
