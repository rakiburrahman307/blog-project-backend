import CustomError from '../../manageAllTypesErrors/CustomError';
import { SortOrder, TBlog } from './blog.interface';
import { Blog } from './blog.model';
import status from 'http-status';

const createBlog = async (
  payload: TBlog,
  user: Record<string, string | number>,
) => {
  const { title, content } = payload;
  const { id } = user;

  // Check if required fields are provided
  if (!title || !content) {
    throw new CustomError(
      status.BAD_REQUEST,
      'Title and content are required.',
    );
  }

  // Create a new blog
  const newBlog = await Blog.create({
    title,
    content,
    author: id,
  });

  // Populate the author field
  const populatedBlog = await newBlog.populate({
    path: 'author',
  });

  return populatedBlog;
};
// update service function
const updateBlog = async (
  blogId: string,
  payload: Partial<TBlog>,
  user: Record<string, string | number>,
) => {
  const { id: userId } = user;

  // Find the blog by ID
  const blog = await Blog.findById(blogId).populate('author');
  if (!blog) {
    throw new CustomError(status.NOT_FOUND, 'Blog not found.');
  }

  //   console.log('blog id', blog.author._id.toString());
  //   console.log('user id', userId.toString());
  // Check if the logged-in user is the author
  if (blog?.author?._id.toString() !== userId.toString()) {
    throw new CustomError(
      status.UNAUTHORIZED,
      'You are not authorized to update this blog.',
    );
  }
  // Update the blog
  const result = await Blog.findByIdAndUpdate(
    blogId,
    { $set: payload },
    { new: true, runValidators: true },
  ).populate('author');
  return result;
};

// delete the blog function
const deleteBlog = async (
  id: string,
  user: Record<string, string | number>,
) => {
  const { id: userId } = user;
  const blog = await Blog.findById(id).populate('author');
  // Check if the logged-in user is the author
  if (blog?.author?._id.toString() !== userId.toString()) {
    throw new CustomError(
      status.UNAUTHORIZED,
      'You are not authorized to delete this blog.',
    );
  }
  // Delete the blog
  await Blog.findByIdAndDelete(id);
  return;
};

const getAllBlogs = async (query: Record<string, string>) => {
  const { search, sortBy = 'createdAt', sortOrder = 'desc', filter } = query;

  const searchQuery: Record<string, any> = search
    ? {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
        ],
      }
    : {};
  // filter query
  const filterQuery: Record<string, any> = filter ? { author: filter } : {};
  //   sort option
  const sortOption: Record<string, SortOrder> = {
    [sortBy]: sortOrder === 'desc' ? -1 : 1,
  };
  const finalQuery = { ...searchQuery, ...filterQuery };
  //  find the all blogs
  const blogs = await Blog.find(finalQuery).sort(sortOption).populate('author');

  return blogs;
};
const blogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
export default blogService;
