import { z } from 'zod';

const VocabularyValidator = z.object({
    word: z.string().optional(),
    pronunciation: z.string().optional(),
    whenToSay: z.string().optional(),
    adminEmail: z.string().optional(),
    lessonNo: z.number().optional(),
});

export const VocabularyValidation = {
    VocabularyValidator,
};