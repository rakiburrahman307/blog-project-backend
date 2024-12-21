import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import adminService from './admin.service';

const handleBlockUsersByAdmin = catchAsync(async (req, res) => {
    // send the user id to the service function 
  const result = await adminService.blockUser()
  sendResponse(res, {
    success: true,
    message: 'Block users by admin successfully',
    statusCode: status.OK,
  });
});
const handleDeleteBlogByAdmin = catchAsync(async (req, res) => {

    // send the blog id to the service function 
    const result = await adminService.blockUser()

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
