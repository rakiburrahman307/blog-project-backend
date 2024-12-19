import { TUser } from './user.interface';
import { User } from './user.model';

const register = async (payload: TUser) => {
  // Implement user registration logic here
  const result = await User.create(payload);
  return result;
};

const login = () => {};

const userService = {
  register,
  login,
};

export default userService;
