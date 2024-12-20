import CustomError from '../../manageAllTypesErrors/CustomError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import status from 'http-status';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

// register user
const register = async (payload: TUser) => {
  //user registration logic
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new CustomError(status.BAD_REQUEST, 'This Email already exists!');
  }
  const result = await User.create(payload);
  return result;
};

// login user service
const login = async (payload: TLoginUser) => {
  const { email, password } = payload;

  //Check if user exists
  const existUser = await User.findOne({ email });
  if (!existUser) {
    throw new CustomError(status.BAD_REQUEST, 'Invalid credentials!');
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, existUser?.password);
  if (!isPasswordValid) {
    throw new CustomError(status.BAD_REQUEST, 'Invalid credentials!');
  }

  const userObject = {
    email: existUser?.email,
    role: existUser?.role,
  };
  // Generate JWT token
  const token = jwt.sign(userObject, config?.JWT_SECRET_KEY || 'secret', {
    expiresIn: '24h',
  });

  // Return user token
  return {
    token,
  };
};

const userService = {
  register,
  login,
};

export default userService;
