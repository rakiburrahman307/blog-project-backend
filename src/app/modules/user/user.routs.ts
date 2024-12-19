import express from 'express';
import userController from './user.controller';
import validateZodSchema from '../../middlewares/validateZodSchema';
import { userZodValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateZodSchema(userZodValidationSchema.userValidation),
  userController.registerUser,
);

router.post('/login', userController.loginUser);

export const userRoute = router;
