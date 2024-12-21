import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
  PASS_SALT: process.env.PASS_SALT_BCRYPT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};

export default config;
