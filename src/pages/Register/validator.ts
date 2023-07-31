import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha obrigatória"),
  telephone: z.string().min(11, "O número deve conter ao menos 11 carácteres"),
});

export type RegisterData = z.infer<typeof schema>;
