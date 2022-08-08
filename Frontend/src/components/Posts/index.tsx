import { useState } from 'react';

import { deletePost, updatePost } from '../../services/PostsServices';

import { BiEditAlt } from 'react-icons/bi';
import { BsFillEraserFill } from 'react-icons/bs';

import * as S from './style';

interface Iprops {
  id: number;
  title: string;
  content: string;
  authorId: number;
  userId: number;
}

function Posts({ id, title, content, authorId, userId }: Iprops) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const removePost = async () => {
    await deletePost(id);
  };

  const editPost = async () => {
    await updatePost(id, newContent);
  };

  return (
    <S.PostsWrapper>
      <S.PostHeader>
        <span>{title} Diz:</span>
        {authorId === userId && (
          <div>
            <button onClick={() => setIsEditing(!isEditing)}>
              <BiEditAlt size="1.5rem" color="orange" />
            </button>
            <button>
              <BsFillEraserFill
                onClick={removePost}
                size="1.5rem"
                color="orange"
              />
            </button>
          </div>
        )}
      </S.PostHeader>
      {isEditing ? (
        <S.EditForm onSubmit={editPost}>
          <input
            placeholder="Atualize o seu post!"
            type="texarea"
            onChange={(e) => {
              setNewContent(e.target.value);
            }}
          />
          <button>Editar</button>
          <span>Modo de edição</span>
        </S.EditForm>
      ) : (
        <p>{content}</p>
      )}
    </S.PostsWrapper>
  );
}

export default Posts;
