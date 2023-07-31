import { Dispatch, useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { Container, DivModal } from "./styles";
import { ModalEditContacts } from "../ModalEditContacts";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { FaPen, FaTrashAlt } from "react-icons/fa";

interface CardProps {
  contact: Contact;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export const Card = ({ contact, setContacts }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const deleteContact = async () => {
    await api.delete(`/contacts/${contact.id}`);

    const response = await api.get("/contacts");

    setContacts(response.data);

    closeModalDelete();
  };

  return (
    <>
      {isOpenModal && (
        <ModalEditContacts
          toggleModal={toggleModal}
          setContacts={setContacts}
          contact={contact}
        />
      )}
      {modalDelete && (
        <Modal toggleModal={closeModalDelete}>
          <DivModal>
            <h3>Deletar {contact.name} ?</h3>

            <button className="excludeYes" onClick={deleteContact}>
              Deletar
            </button>
            <button className="excludeNo" onClick={closeModalDelete}>
              Cancelar
            </button>
          </DivModal>
        </Modal>
      )}
      <Container>
        <div className="cabecalho">
          <h2>{contact.name}</h2>
          <div>
            <button className="edit" type="button" onClick={toggleModal}>
              <FaPen />
            </button>
            <button className="delete" type="button" onClick={closeModalDelete}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
        <p className="email">{contact.email}</p>
        <p className="tel">{contact.telephone}</p>
      </Container>
    </>
  );
};
