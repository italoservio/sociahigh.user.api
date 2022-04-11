import mongoose from 'mongoose';

export type User = {
  _id?: mongoose.Types.ObjectId;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
}
