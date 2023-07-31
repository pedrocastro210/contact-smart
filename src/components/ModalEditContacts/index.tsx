import { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactEditData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./styles";

interface ModalEditContactsProps {
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
  toggleModal: () => void;
  contact: Contact;
}

export const ModalEditContacts = ({
  setContacts,
  toggleModal,
  contact,
}: ModalEditContactsProps) => {
  const { register, handleSubmit } = useForm<ContactEditData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: contact.name,
      email: contact.email,
      telephone: contact.telephone,
    },
  });

  const editContact = async (data: ContactEditData) => {
    await api.patch(`/contacts/${contact.id}`, data);

    const response = await api.get<Contact[]>("/contacts");

    setContacts(response.data);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Form onSubmit={handleSubmit(editContact)}>
        <h3>Editar {contact.name}</h3>
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
