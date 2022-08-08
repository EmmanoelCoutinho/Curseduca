import { useState } from 'react';

import AsideMenu from '../../components/AsideMenu';
import Posts from '../../components/Posts';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import * as S from './style';

function FeedPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Feed>
        <S.FeedContainer>
          <S.FeedHeader>
            <span>
              Seja Bem-vindo, <strong> João</strong>!
            </span>
            <button onClick={() => setModalIsOpen(!isModalOpen)}>
              <HiOutlineMenuAlt3 size="1.5rem" color="white" />
            </button>
          </S.FeedHeader>
          <S.PostForm>
            <input type="textarea" placeholder="Digite aqui o seu post!" />
            <button>Enviar</button>
          </S.PostForm>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </S.FeedContainer>
        <AsideMenu disappear />
      </S.Feed>

      {isModalOpen && (
        <S.Modal>
          <S.Overlay />
          <S.ModalContent>
            <S.ModalHeader>
              <button onClick={() => setModalIsOpen(!isModalOpen)}>
                <AiOutlineCloseCircle size="1.5rem" color="white" />
              </button>
            </S.ModalHeader>
            <AsideMenu disappear={false} />
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
}

export default FeedPage;
