import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

const authValidation = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    console.log(`token: ${token}`);
  });
};
export default authValidation;
