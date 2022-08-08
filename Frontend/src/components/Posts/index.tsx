import { BiEditAlt } from 'react-icons/bi';
import { BsFillEraserFill } from 'react-icons/bs';

import * as S from './style';

function Posts() {
  return (
    <S.PostsWrapper>
      <S.PostHeader>
        <span>João Paulo Diz:</span>
        <div>
          <button>
            <BiEditAlt size="1.5rem" color="orange" />
          </button>
          <button>
            <BsFillEraserFill size="1.5rem" color="orange" />
          </button>
        </div>
      </S.PostHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
        tincidunt sem ac blandit. Morbi eleifend erat vel erat pellentesque
        molestie. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Phasellus at ullamcorper nisi, non
        ullamcorper arcu. Donec eget tempus arcu. Fusce tincidunt libero elit,
        sit amet commodo nunc scelerisque a. Integer suscipit augue nec mattis
        porta. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Suspendisse vel orci a tortor gravida
        venenatis. Integer efficitur, orci in commodo dignissim, tortor dui
        ullamcorper mi, sed sodales nisl odio a diam. Donec in quam felis.
      </p>
    </S.PostsWrapper>
  );
}

export default Posts;
