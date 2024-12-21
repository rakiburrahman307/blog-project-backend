import CustomError from '../../manageAllTypesErrors/CustomError';
import { Blog } from '../blog/blog.model';
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
// delete blog by admin 
const deleteBlog = async (id: string) => {
  //find and delete the blog
  const deletedBlog = await Blog.findByIdAndDelete(id);

  // not existing in database
  if (!deletedBlog) {
    throw new CustomError(status.NOT_FOUND, 'Blog not found!');
  }

  return;
};

const adminService = {
  blockUser,
  deleteBlog,
};

export default adminService;
