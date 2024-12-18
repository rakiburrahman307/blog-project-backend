import app from './app';
import mongoose from 'mongoose';
import config from './config/config';

const dbConnect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI as string);
    console.log('mongodb instance connected');
    app.listen(config.PORT, () => {
      console.log(`Server is listening on Prot ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
dbConnect();
