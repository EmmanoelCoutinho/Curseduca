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
    top: 5%;

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

  width: 90%;
  height: 50%;

  border-radius: 10px;

  padding: 2.5rem 1rem;

  background-color: ${(props) => props.theme.colors.background};

  .buttons {
    display: flex;
    gap: 1rem;
    height: 90px;
    // background-color: red;
  }

  .register {
    border: 1px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.background};
  }

  h3 {
    font-size: 1.5rem;
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
  width: 70%;
  height: 3rem;

  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text_light};

  border-radius: 10px;
  border: none;

  background-color: ${(props) => props.theme.colors.secundary};
`;
