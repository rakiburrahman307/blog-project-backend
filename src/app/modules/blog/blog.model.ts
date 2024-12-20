import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

// Blog Schema
const blogSchema = new Schema<TBlog>(
    {
      title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
      },
      content: {
        type: String,
        required: [true, "Content is required"],
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required"],
      },
      isPublished: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Blog Model
  export const Blog = model<TBlog>("Blog", blogSchema);