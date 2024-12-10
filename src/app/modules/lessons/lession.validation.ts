import { z } from 'zod';

const LessionValidator = z.object({
    LessionName: z.string().optional(),
    description: z.string().optional(),
    LessionNumber: z.number().optional(),
});

export const LessionValidation = {
    LessionValidator,
};