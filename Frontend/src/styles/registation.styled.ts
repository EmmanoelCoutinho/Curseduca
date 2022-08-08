import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(to bottom right, #083b8a, #ffffff);

  img {
    position: absolute;
    top: 3%;

    width: 14rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-between;

  font-weight: bold;
  color: ${(props) => props.theme.colors.text_dark};
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);

  width: 90%;
  max-width: 600px;
  height: fit-content;
  max-height: 448px;

  border-radius: 10px;
  border: none;

  padding: 2rem;

  background-color: ${(props) => props.theme.colors.text_light};

  .buttons {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .register {
    border: 1px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.secundary};
    background-color: inherit;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;

  border-radius: 10px;
  border: none;

  font-size: 0.9rem;

  margin: 4px 0 1rem 0;
  padding: 0 1rem;
`;

export const Button = styled.button`
  width: fit-content;
  min-width: 100px;
  height: 3rem;

  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text_light};

  border-radius: 10px;
  border: none;

  padding: 0.8rem;

  background-color: ${(props) => props.theme.colors.secundary};
`;
