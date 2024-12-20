import express from 'express';
import validateZodSchema from '../../middlewares/validateZodSchema';
import { blogValidationSchema } from './blog.validation';
import blogController from './blog.controller';
import authValidation from '../../middlewares/authValidation';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/blogs',
  authValidation(USER_ROLE.user, USER_ROLE.admin),
  validateZodSchema(blogValidationSchema.blogZodValidation),
  blogController.createBlogIIntoDB
);
router.patch(
  '/blogs/:id',
  authValidation(USER_ROLE.user),
  validateZodSchema(blogValidationSchema.updateZodValidation),
  blogController.updateBlogIntoDB
);
router.delete(
  '/blogs/:id',
  authValidation(USER_ROLE.user),
  blogController.deleteBlogFormDB
);

// router.post(
//   '/login',
// );

export const blogRoute = router;