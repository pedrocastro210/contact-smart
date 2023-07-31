import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    background-color: var(--color-blue-700);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
  }

  .user {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
  }

  .nav {
    display: flex;
    gap: 12px;
  }

  .nav > button,
  .user > button {
    color: white;
  }

  .nav > button:hover {
    opacity: 70%;
  }

  .nav > p {
    color: red;
    cursor: pointer;
  }

  .nav > p:hover {
    opacity: 70%;
  }

  button {
    background-color: transparent;
    border: none;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  main > div {
    display: flex;
    justify-content: flex-end;
  }

  .btnAdd {
    color: white;
    margin: 12px 12px 0 0;
    border: 1px solid;
    border-radius: 10px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btnAdd:hover {
    opacity: 70%;
  }
`;

export const Board = styled.ul`
  height: 300px;
  width: 100vw;
  list-style: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0 16px;
`;
