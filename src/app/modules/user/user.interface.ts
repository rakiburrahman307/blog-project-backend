import { Types } from 'mongoose';

export type TRole = 'admin' | 'user';
export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
  isBlocked: boolean;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TAuth = {
  id: Types.ObjectId;
  email: string;
  role: 'admin' | 'user';
};
