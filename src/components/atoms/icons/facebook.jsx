import { ReactComponent as FacebookSvg } from './assets/Facebook.svg';
import IconWrapper from './icon-wrapper';

function Facebook(props) {
  return (
    <IconWrapper {...props}>
      <FacebookSvg />
    </IconWrapper>
  );
}

export default Facebook;
