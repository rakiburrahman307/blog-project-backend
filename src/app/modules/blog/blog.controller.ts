import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import blogService from './blog.service';
import status from 'http-status';

const createBlogIIntoDb = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req?.body);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: status.CREATED,
    data: result,
  });
});

const blogController = {
  createBlogIIntoDb,
};

export default blogController;
