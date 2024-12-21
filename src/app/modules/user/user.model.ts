import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../config/config';
import { TUser } from './user.interface';

const roles = ['admin', 'user'] as const;

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
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

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, Number(config.PASS_SALT));
  }
  next();
});

// toEnsure not send those fields to the Client
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.role;
  delete user.isBlocked;
  delete user.createdAt;
  delete user.updatedAt;
  delete user.__v;

  return user;
};
export const User = model('User', userSchema);
