import { useState, useEffect } from 'react';

import AsideMenu from '../../components/AsideMenu';
import Posts from '../../components/Posts';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { getCurrentUser } from '../../services/UserService';

import * as S from './style';
import { getPosts, sendPost } from '../../services/PostsServices';

interface IUser {
  id: number;
  name: string;
  email: null;
}

function FeedPage() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
  const [posts, setPosts] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPost({
      title: user.name,
      content: postContent,
      authorId: user.id,
    });
  };

  useEffect(() => {
    getCurrentUser().then((user) => setUser(user));
    getPosts().then((posts) => setPosts(posts.reverse()));
  }, []);

  return (
    <S.Container>
      <S.Feed>
        <S.FeedContainer>
          <S.FeedHeader>
            <span>Seja Bem-vindo, {user.name}!</span>
            <button onClick={() => setModalIsOpen(!isModalOpen)}>
              <HiOutlineMenuAlt3 size="1.5rem" color="white" />
            </button>
          </S.FeedHeader>
          <S.PostForm onSubmit={handleSubmit}>
            <input
              type="textarea"
              placeholder="Digite aqui o seu post!"
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            />
            <button>Enviar</button>
          </S.PostForm>
          {posts.map((post) => (
            <Posts
              key={post.id}
              title={post.title}
              content={post.content}
              authorId={post.authorId}
              userId={user.id}
            />
          ))}
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
