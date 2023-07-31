import { styled } from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 10px 0 var(--color-blue-500);

    padding: 20px;
    width: 100%;
    max-width: 350px;

    border-radius: 25px;
  }

  .modalExclude {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    gap: 12px;
  }

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
