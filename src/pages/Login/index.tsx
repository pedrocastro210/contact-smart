import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const { signIn } = useAuth();

  return (
    <Container>
      <div>
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit(signIn)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <button type="submit">Entrar</button>
        </form>

        <button type="button" onClick={() => navigate("/register")}>
          Cadastrar
        </button>
      </div>
    </Container>
  );
};
