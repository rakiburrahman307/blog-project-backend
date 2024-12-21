import { Types } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished: boolean;
};

export type SortOrder = 1 | -1 | 'asc' | 'desc';
