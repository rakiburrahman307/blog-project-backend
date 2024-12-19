import { z } from 'zod';

const userValidation = z.object({
  body: z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(20),
  }),
});

export const userZodValidationSchema = {
  userValidation,
};
