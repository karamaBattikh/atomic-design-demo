import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const variantsClass = {
  danger: 'btn-danger',
  light: 'btn-light',
  link: 'btn-link',
  outline: 'btn-outline',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  warning: 'btn-warning',
};

const sizeClass = {
  large: 'btn-l',
  small: 'btn-sm',
};

const iconClass = {
  icon: 'icon',
  iconOnly: 'only-icon',
};

export default function Button({
  as,
  children,
  className,
  disabled,
  icon,
  onClick,
  size,
  type,
  variant,
  ...rest
}) {
  const classNames = clsx(
    styles.button,
    styles?.[variantsClass?.[variant]],
    styles?.[sizeClass?.[size]],
    styles?.[iconClass?.[icon]],
    className,
  );
  const Comp = as || 'button';
  return (
    <Comp
      type={type ? 'submit' : 'button'}
      className={classNames}
      onClick={onClick}
      disabled={!!disabled}
      {...rest}
    >
      {children}
    </Comp>
  );
}
Button.defaultProps = {
  disabled: false,
  variant: 'primary',
};

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(['icon', 'iconOnly']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'light',
    'outline',
    'success',
    'warning',
    'link',
  ]),
};
