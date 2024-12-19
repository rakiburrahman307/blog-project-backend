import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const roles = ['admin', 'user'] as const;

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/.+@.+\..+/, 'Invalid email format'],
    },
    password: { type: String, required: [true, 'Password is required'] },
    role: {
      type: String,
      enum: roles,
      required: true,
      default: 'user',
    },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
