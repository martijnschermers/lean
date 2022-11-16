import { Exercise } from '@lean/api-interfaces';
import * as mongoose from 'mongoose'; 

export const SetSchema = new mongoose.Schema({
  reps: {
    type: Number, 
    required: true, 
    default: 0, 
  }, 
  weight: {
    type: Number, 
    required: true, 
    default: 0,
  }, 
  exercise: {
    type: Exercise, 
    required: true,
  }
})