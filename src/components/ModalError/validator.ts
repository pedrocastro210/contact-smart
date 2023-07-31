import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um e-mail"),
  telephone: z.string().min(11, "Ex: (00) 98765-4321"),
});

export type ContactData = z.infer<typeof schema>;
