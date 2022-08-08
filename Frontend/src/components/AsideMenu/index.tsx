import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import AsideButtons from '../AsideButtons';
import { ImExit } from 'react-icons/im';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

import * as S from './style';

interface Iprops {
  disappear: boolean;
}

function AsideMenu({ disappear }: Iprops) {
  const { title } = useContext(ThemeContext);

  const size = '1.2rem';

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    window.location.reload();
  };

  return (
    //class disappear está na style do feed
    <S.Container className={disappear ? 'disappear' : ''}>
      <AsideButtons
        handleClick={toggleTheme}
        text="Tema"
        icon={
          title === 'light' ? <FaSun size={size} /> : <MdDarkMode size={size} />
        }
      />
      <AsideButtons text="Sair" icon={<ImExit size={size} />} />
    </S.Container>
  );
}

export default AsideMenu;
