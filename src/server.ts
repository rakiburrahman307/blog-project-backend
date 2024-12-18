import app from './app';
import mongoose from 'mongoose';
import config from './config/config';
import { Server } from 'http';

let server: Server;

const dbConnect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI as string);
    console.log('mongodb instance connected');
    server = app.listen(config.PORT, () => {
      console.log(`Server is listening on Prot ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
dbConnect();
process.on('unhandledRejection', () => {
  console.log(`😈 unhandled Rejection is detected, shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1); // Exits with failure code
    });
  }
  process.exit(1); // Immediate exit if no server exists
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected, shutting down ...`);
  process.exit(1);
});
