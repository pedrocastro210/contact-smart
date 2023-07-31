import { styled } from "styled-components";

export const Form = styled.form`
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > div > input {
    height: 15%;
    width: 100%;

    background-color: var(--color-gray-200);

    margin: 6px 0 12px 0;
  }

  > button {
    width: 100%;
    padding: 8px 0;

    background-color: yellowgreen;
    color: white;

    border: 1px solid transparent;
    border-radius: 5px;
  }

  > button:hover {
    opacity: 70%;
  }
`;
