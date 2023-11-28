import clsx from 'clsx';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

import styles from './icon-wrapper.module.scss';

export default function Icon(props) {
  const { children, className, color, size, style, ...otherProps } = props;

  return cloneElement(children, {
    'aria-hidden': true,
    className: clsx(styles.icon, className, size && styles?.[`icon-size-${size}`]),
    focusable: false,
    role: 'img',
    size,
    style: { ...style, '--svg-color': color || 'currentColor' },
    ...otherProps,
  });
}

Icon.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
