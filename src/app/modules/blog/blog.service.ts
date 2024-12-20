import CustomError from "../../manageAllTypesErrors/CustomError";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import  status  from 'http-status';

const createBlog = async (payload: TBlog) => {
  // blog creation logic
  const { title, content } = payload;

  // Check if required fields are provided
  if (!title || !content) {
    throw new CustomError(status.BAD_REQUEST, "Title and content are required.");
  }
  const newBlog = await Blog.create({
    title,
    content,
    // author: authorId,
  });
  console.log(payload)

};

const blogService = {
  createBlog,
};
export default blogService;
