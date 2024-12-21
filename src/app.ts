import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import status from 'http-status';
import routers from './app/router';
import { notFound } from './app/middlewares/notFound';
import { globalErrorHandler } from './app/globalErrorHandler/globalErrorHandler';

const app: Application = express();

// middle were
app.use(express.json());
app.use(cors());

// all route
app.use('/api', routers);

// testing route
app.get('/', (req: Request, res: Response) => {
  res.status(status.OK).json({
    status: status.OK,
    success: true,
    message: 'Welcome to Blog Project API!',
  });
});
// page not found
app.use(notFound);
// Error-Handling Middleware
app.use(globalErrorHandler);

export default app;
