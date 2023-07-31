import { User } from "../../pages/Dashboard";
import { UserEditData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch } from "react";
import { Form } from "./styles";

interface ModalEditUserProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: Dispatch<React.SetStateAction<User>> | any;
  toggleModal: () => void;
  user: User;
}

export const ModalEditUser = ({
  toggleModal,
  user,
  setUser,
}: ModalEditUserProps) => {
  const { register, handleSubmit } = useForm<UserEditData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
    },
  });

  const editContact = async (data: UserEditData) => {
    const response = await api.patch("/users", data);

    setUser(response.data);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Form onSubmit={handleSubmit(editContact)}>
        <h3>Editar {user.name}</h3>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="tel">Telefone</label>
          <input type="text" id="tel" {...register("telephone")} />
        </div>

        <button type="submit">Editar</button>
      </Form>
    </Modal>
  );
};
