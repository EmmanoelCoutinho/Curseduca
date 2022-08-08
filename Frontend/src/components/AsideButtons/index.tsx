import { Button } from './style';

interface Iprops {
  text: string;
  icon: any;
}

function AsideButtons({ text, icon }: Iprops) {
  return (
    <div>
      <Button>
        {icon}
        <span>{text}</span>
      </Button>
    </div>
  );
}

export default AsideButtons;
