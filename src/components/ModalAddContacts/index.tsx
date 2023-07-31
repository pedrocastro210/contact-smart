import { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./styles";

interface ModalAddContactsProps {
  toggleModal: () => void;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export const ModalAddContacts = ({
  setContacts,
  toggleModal,
}: ModalAddContactsProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: ContactData) => {
    const response = await api.post<Contact>("/contacts", data);

    setContacts((previusContacts) => [response.data, ...previusContacts]);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Form onSubmit={handleSubmit(createContact)}>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="tel">Telefone</label>
          <input type="text" id="tel" {...register("telephone")} />
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
