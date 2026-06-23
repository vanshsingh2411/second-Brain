import { z } from 'zod';
export const authSchema = z.object({
    username: z.string().min(3).max(15),
    password: z.string().min(4).max(10)
});
//# sourceMappingURL=schema.js.map