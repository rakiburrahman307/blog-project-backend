import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

// Blog Schema
const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        // Remove unwanted fields
        delete ret.isPublished;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.id;
        return ret;
      },
    },
  },
);

// Blog Model
export const Blog = model<TBlog>('Blog', blogSchema);
