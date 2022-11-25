import * as mongoose from 'mongoose';
import { SetSchema } from '../set/set.schema';

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
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  sets: {
    type: [SetSchema]
  },
});
