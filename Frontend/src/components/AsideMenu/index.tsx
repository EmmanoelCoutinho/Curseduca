import * as S from './style';

import AsideButtons from '../AsideButtons';
import { ImExit } from 'react-icons/im';

interface Iprops {
  disappear: boolean;
}

function AsideMenu({ disappear }: Iprops) {
  return (
    //class disappear está na style do feed
    <S.Container className={disappear ? 'disappear' : ''}>
      <AsideButtons text="Sair" icon={<ImExit size="1.2rem" />} />
    </S.Container>
  );
}

export default AsideMenu;
