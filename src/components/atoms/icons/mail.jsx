import React from 'react';

import { ReactComponent as MailSvg } from './assets/Mail.svg';
import IconWrapper from './icon-wrapper';

function Mail(props) {
  return (
    <IconWrapper {...props}>
      <MailSvg />
    </IconWrapper>
  );
}

export default Mail;
