import { z } from 'zod';

const userValidationSchema = z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
        photo: z.string().optional(),
        pasword: z
            .string({
                invalid_type_error: 'Password must be string',
            })
            .max(20, { message: 'Password can not be more than 20 characters' })
            .optional(),
});

export const UserValidation = {
    userValidationSchema,
};