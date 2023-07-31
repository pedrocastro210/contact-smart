import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Board, Container } from "./styles";
import { Card } from "../../components/Card";
import { ModalAddContacts } from "../../components/ModalAddContacts";
import { FaPlus, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { ModalEditUser } from "../../components/ModalEditUsers";

export interface Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  createdAt: Date;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState<User>();
  const [modalExclude, setModalExclude] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");
      const user = await api.get("/users");

      setUser(user.data);
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const singOut = () => {
    localStorage.removeItem("contactsmart:token");

    navigate("/");
  };

  const toggleModalExclude = () => {
    setModalExclude(!modalExclude);
  };

  const excludeUser = async () => {
    await api.delete("/users");
    localStorage.removeItem("contactsmart:token");

    navigate("/");
  };

  const toggleModalEdit = () => {
    setModalEditUser(!modalEditUser);
  };

  return (
    <>
      {modalExclude && (
        <Modal toggleModal={toggleModalExclude}>
          <div className="modalExclude">
            <h2>Realmente deseja excluir sua conta ?</h2>
            <button className="excludeYes" type="button" onClick={excludeUser}>
              Sim
            </button>
            <button
              className="excludeNo"
              type="submit"
              onClick={toggleModalExclude}
            >
              Não
            </button>
          </div>
        </Modal>
      )}
      {modalEditUser && (
        <ModalEditUser
          toggleModal={toggleModalEdit}
          user={user!}
          setUser={setUser}
        />
      )}
      <Container>
        <header>
          <div className="user">
            <h3>Olá, {user?.name}</h3>

            <button type="button" onClick={toggleModalEdit}>
              <FaCog />
            </button>
          </div>
          <h2>Contact Smart</h2>
          <div className="nav">
            <button type="button" onClick={singOut}>
              <FaSignOutAlt />
            </button>
            <p onClick={toggleModalExclude}>Excluir conta</p>
          </div>
        </header>
        {isOpenModal && (
          <ModalAddContacts
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}
        <main>
          <div>
            <button className="btnAdd" type="button" onClick={toggleModal}>
              <FaPlus />
            </button>
          </div>
          <Board>
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                contact={contact}
                setContacts={setContacts}
              />
            ))}
          </Board>
        </main>
      </Container>
    </>
  );
};
