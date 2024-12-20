import { z } from 'zod';

const userValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .trim(),
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z.string().min(8).max(20),
  }),
});
const userLoginValidation = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z.string().min(8).max(20),
  }),
})
export const userZodValidationSchema = {
  userValidation,
  userLoginValidation
};
