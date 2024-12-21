import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import adminService from './admin.service';

const handleBlockUsersByAdmin = catchAsync(async (req, res) => {
  const { userId } = req.params;
  // send the user id to the service function
  await adminService.blockUser(userId);
  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: status.OK,
  });
});
const handleDeleteBlogByAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  // send the blog id to the service function
  await adminService.deleteBlog(id);

  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: status.OK,
  });
});

const adminController = {
  handleBlockUsersByAdmin,
  handleDeleteBlogByAdmin,
};

export default adminController;
