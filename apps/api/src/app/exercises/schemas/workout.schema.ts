import * as mongoose from 'mongoose';
import { SetSchema } from './set.schema';

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
  sets: {
    type: [SetSchema]
  },
});
