import { BiEditAlt } from 'react-icons/bi';
import { BsFillEraserFill } from 'react-icons/bs';

import * as S from './style';

interface Iprops {
  title: string;
  content: string;
  authorId: number;
  userId: number;
}

function Posts({ title, content, authorId, userId }: Iprops) {
  return (
    <S.PostsWrapper>
      <S.PostHeader>
        <span>{title} Diz:</span>
        {authorId === userId && (
          <div>
            <button>
              <BiEditAlt size="1.5rem" color="orange" />
            </button>
            <button>
              <BsFillEraserFill size="1.5rem" color="orange" />
            </button>
          </div>
        )}
      </S.PostHeader>
      <p>{content}</p>
    </S.PostsWrapper>
  );
}

export default Posts;
