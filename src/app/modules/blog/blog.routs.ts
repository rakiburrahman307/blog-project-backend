import express from 'express';
import validateZodSchema from '../../middlewares/validateZodSchema';
import { blogValidationSchema } from './blog.validation';
import blogController from './blog.controller';
import authValidation from '../../middlewares/authValidation';

const router = express.Router();

router.post(
  '/blogs',
  authValidation(),
  validateZodSchema(blogValidationSchema.blogZodValidation),
  blogController.createBlogIIntoDb
);

// router.post(
//   '/login',
// );

export const blogRoute = router;