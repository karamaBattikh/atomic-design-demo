import React from 'react';

import { ReactComponent as ErrorSvg } from './assets/Error.svg';
import IconWrapper from './icon-wrapper';

function Error(props) {
  return (
    <IconWrapper {...props}>
      <ErrorSvg />
    </IconWrapper>
  );
}

export default Error;
