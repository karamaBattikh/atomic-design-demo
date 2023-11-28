import { ReactComponent as InstagramSvg } from './assets/Instagram.svg';
import IconWrapper from './icon-wrapper';

function Instagram(props) {
  return (
    <IconWrapper {...props}>
      <InstagramSvg />
    </IconWrapper>
  );
}

export default Instagram;
