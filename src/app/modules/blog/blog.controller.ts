import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import blogService from './blog.service';
import status from 'http-status';
// create new blog post
const createBlogIIntoDB = catchAsync(async (req, res) => {
  const userData = req?.user;
  const result = await blogService.createBlog(req?.body, userData);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: status.CREATED,
    data: result,
  });
});
const updateBlogIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const user = req.user;

  const result = await blogService.updateBlog(id, payload, user);
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: status.OK,
    data: result,
  });
});
// delete blog for user
const deleteBlogFormDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = req?.user;
  await blogService.deleteBlog(id, user);
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: status.OK,
  });
});
// find all the blog post and filtering results
const getAllBlogsFormDB = catchAsync(async (req, res) => {
  const query = req.query as Record<string, string>;
  const result = await blogService.getAllBlogs(query);
  sendResponse(res, {
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: status.OK,
    data: result,
  });
});

const blogController = {
  createBlogIIntoDB,
  updateBlogIntoDB,
  deleteBlogFormDB,
  getAllBlogsFormDB,
};

export default blogController;
