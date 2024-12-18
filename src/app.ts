import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import status from 'http-status';
import { notFound } from './middlewares/notFound';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

const app: Application = express();

// middle were
app.use(express.json());
app.use(cors());

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
