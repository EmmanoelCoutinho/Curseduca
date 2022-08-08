import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  min-height: 100vh;
  height: 100%;

  background-color: ${(props) => props.theme.colors.background};
`;

export const Feed = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  height: 100%;

  //classe usada para apagar o aside menu
  .disappear {
    @media (max-width: 499px) {
      display: none;
    }
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  max-width: 600px;
  min-height: 100vh;
  height: 100%;

  border-left: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
`;

export const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  padding: 0 0.5rem;

  background-color: ${(props) => props.theme.colors.primary};

  span {
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }

  button {
    border: none;
    background-color: inherit;

    @media (min-width: 499px) {
      display: none;
    }
  }
`;

export const PostForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  background-color: ${(props) => props.theme.colors.primary};

  textarea {
    width: 100%;
    padding: 1rem 0 120px 0.5rem;

    resize: none;

    font-size: 1rem;
    color: ${(props) => props.theme.colors.text_dark};

    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};

    background-color: ${(props) => props.theme.colors.background};
    overflow-wrap: hidden;

    :focus {
      outline: none;
    }
  }

  button {
    position: absolute;

    width: fit-content;
    height: fit-content;

    border-radius: 10px;
    border: none;

    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text_light};

    padding: 12px;

    margin: 0 1.2rem 1.2rem 0;

    background-color: ${(props) => props.theme.colors.secundary};
  }
`;

//modal styles

export const Modal = styled.div`
  position: absolute;

  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 238px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const ModalHeader = styled(FeedHeader)`
  justify-content: flex-end;

  button {
    background-color: inherit;
    border: none;
  }
`;
