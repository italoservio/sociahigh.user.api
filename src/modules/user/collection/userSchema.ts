import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  birthDate: {type: Date, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  profilePicture: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now()},
  updatedAt: {type: Date, required: true, default: Date.now()},
});

userSchema.index({email: 1});
