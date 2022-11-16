import { Exercise } from '@lean/api-interfaces';
import * as mongoose from 'mongoose';

export const GroupWorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  exercises: {
    type: [Exercise], 
    required: true, 
  },
});