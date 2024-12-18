import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const globalErrorHandler: ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Something went wrong, please try again later.',
    });
  
};
