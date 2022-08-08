import { Button } from './style';

interface Iprops {
  text: string;
  icon: any;
  handleClick?: () => void;
}

function AsideButtons({ text, icon, handleClick }: Iprops) {
  return (
    <div>
      <Button onClick={handleClick}>
        {icon}
        <span>{text}</span>
      </Button>
    </div>
  );
}

export default AsideButtons;
