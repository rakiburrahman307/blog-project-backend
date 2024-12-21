import express from 'express';
import authValidation from '../../middlewares/authValidation';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  authValidation(USER_ROLE.admin),

);
router.delete(
  '/blogs/:id',
  authValidation(USER_ROLE.admin),
);


export const adminRoute = router;