import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  > div {
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 10px 0 var(--color-blue-500);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 32px 6px;
    width: 350px;
    height: 350px;

    border-radius: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;

    gap: 12px;
    margin-top: 32px;

    width: 95%;
  }

  .form > button {
    background-color: var(--color-blue-900);
    color: white;

    margin-top: 18px;
    padding: 6px 0;

    border-radius: 5px;
    border: 1px solid transparent;
  }

  button:hover {
    opacity: 70%;
  }

  > div > button {
    background-color: var(--color-gray-700);
    color: white;

    margin-top: 18px;
    padding: 6px 0;
    width: 95%;

    border-radius: 5px;
    border: 1px solid transparent;
  }
`;
