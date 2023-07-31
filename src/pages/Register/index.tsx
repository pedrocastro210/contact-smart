import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const registerUser = async (data: RegisterData) => {
    try {
      const response = await api.post("/users", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  return (
    <Container>
      <div>
        <h2>Cadastro</h2>
        <form className="form" onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <label htmlFor="telephone">Telefone</label>
          <input type="text" id="telephone" {...register("telephone")} />

          <button type="submit">Cadastrar</button>
        </form>

        <button type="button" onClick={() => navigate("/")}>
          Login
        </button>
      </div>
    </Container>
  );
};
