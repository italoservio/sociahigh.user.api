import mongoose from 'mongoose';
import {userSchema} from './userSchema';

export const User = mongoose.model('User', userSchema);
