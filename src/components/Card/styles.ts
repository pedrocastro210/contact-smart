import { styled } from "styled-components";

export const Container = styled.li`
  width: 250px;
  height: 100px;
  background-color: var(--color-gray-300);
  color: var(--color-gray-900);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;

  box-shadow: 0 0 5px 0 var(--color-blue-300);

  .cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
  }

  .cabecalho > div {
    display: flex;
    gap: 12px;
  }

  .delete {
    color: darkred;
  }

  .cabecalho > div > button:hover {
    color: gray;
  }

  > p {
    margin: 6px 0;
  }

  .email {
    color: var(--color-gray-600);
  }

  .tel {
    font-size: 20px;
    color: var(--color-blue-900);
  }
`;

export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  gap: 12px;

  .excludeYes,
  .excludeNo {
    padding: 5px 0;
    width: 60%;
    border: 1px solid transparent;
    border-radius: 10px;
  }

  .excludeYes:hover,
  .excludeNo:hover {
    opacity: 70%;
  }

  .excludeYes {
    background-color: yellowgreen;
    color: white;
  }

  .excludeNo {
    background-color: darkred;
    color: white;
  }
`;
