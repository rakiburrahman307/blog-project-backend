import { z } from 'zod';

const blogZodValidation = z.object({
  body: z.object({
    title: z.string({required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',}),
    content: z.string({
      required_error: 'Content is required',
      invalid_type_error: 'Content must be a string',
    }),
    // authorId: z.string(),
  }),
});

export const blogValidationSchema = {
  blogZodValidation,
};
