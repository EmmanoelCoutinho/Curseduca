import styled from 'styled-components';

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.text_light};

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text_dark};
    line-height: 1.2rem;

    padding: 0.5rem;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secundary};

  background-color: ${(props) => props.theme.colors.text_light};

  padding: 0 0.5rem;

  div {
    display: flex;
    gap: 0.8rem;
  }

  button {
    border: none;
    background-color: inherit;
  }
`;
