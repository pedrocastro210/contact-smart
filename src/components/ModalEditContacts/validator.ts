import { z } from "zod";

export const schema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  telephone: z.string().optional(),
});

export type ContactEditData = z.infer<typeof schema>;
