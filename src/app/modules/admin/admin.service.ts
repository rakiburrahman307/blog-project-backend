import CustomError from '../../manageAllTypesErrors/CustomError';
import { User } from '../user/user.model';
import status from 'http-status';

// Blocked user service function
const blockUser = async (id: string) => {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );

  if (!updatedUser) {
    throw new CustomError(status.NOT_FOUND, 'User to block not found!');
  }
  return;
};
const deleteBlog = async (id: string) => {
  console.log(id);
};

const adminService = {
  blockUser,
  deleteBlog,
};

export default adminService;
