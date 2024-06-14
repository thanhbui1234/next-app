import { z } from 'zod';

export const formSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });
  
export const loginSchema = z
.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
})
.strict()

