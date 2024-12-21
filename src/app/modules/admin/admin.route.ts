import express from 'express';
import authValidation from '../../middlewares/authValidation';
import { USER_ROLE } from '../user/user.constant';
import adminController from './admin.controller';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  authValidation(USER_ROLE.admin),
  adminController.handleBlockUsersByAdmin
);
router.delete(
  '/blogs/:id',
  authValidation(USER_ROLE.admin),
  adminController.handleDeleteBlogByAdmin
);


export const adminRoute = router;