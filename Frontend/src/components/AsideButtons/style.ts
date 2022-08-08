import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text_dark};

  width: fit-content;
  height: fit-content;

  border: none;
  border-radius: 10px;

  padding: 0.5rem 1rem;
  background-color: inherit;

  :hover {
    background-color: ${(props) => props.theme.colors.text_dark};
    color: ${(props) => props.theme.colors.text_light};
  }
`;
