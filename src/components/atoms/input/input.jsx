/* eslint-disable sonarjs/cognitive-complexity */
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Error } from '@/components/atoms/icons';

import styles from './input.module.scss';

const inputIconPositionClass = {
  left: styles.left,
  right: styles.right,
};

export default function Input({
  className,
  disabled,
  hasError,
  icons,
  id,
  inputRef,
  mask,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  pattern,
  placeholder,
  type,
  value,
  ...rest
}) {
  const inputClassName = clsx(
    styles.input,
    styles.reverse,
    icons && styles.with__icon,
    icons && icons[0] && inputIconPositionClass[icons[0]?.position],
    icons && icons[1] && inputIconPositionClass[icons[1]?.position],
    hasError && styles.error,
    className,
  );
  const iconClassName = clsx(
    styles.input__icon,
    icons && icons[0] && inputIconPositionClass[icons[0]?.position],
    icons && icons[1] && inputIconPositionClass[icons[1]?.position],
    hasError && styles.with_error,
  );

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    e.target.placeholder = placeholder;
  };
  const handleFocus = (e) => {
    if (onFocus) {
      onFocus(e);
    }
    e.target.placeholder = '';
  };

  const render = [
    <input
      key="input"
      className={inputClassName}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={mask ? mask(value) : value}
      onBlur={handleBlur}
      onFocus={handleFocus}
      disabled={disabled}
      ref={inputRef}
      pattern={pattern}
      maxLength={maxLength}
      {...rest}
    />,
  ];
  icons?.forEach((item) => {
    if (item.position === 'left') {
      render.splice(
        0,
        0,
        <div style={{ left: '20px' }} className={iconClassName}>
          {item?.comp}
        </div>,
      );
    }
    if (item.position === 'right') {
      render.splice(
        2,
        0,
        <div style={{ right: hasError ? '45px' : '20px' }} className={iconClassName}>
          {item?.comp}
        </div>,
      );
    }
  });
  return (
    <div className={styles.container}>
      {render}
      {hasError && (
        <div className={styles.error__icon}>
          <Error size="xxs" />
        </div>
      )}
    </div>
  );
}

Input.defaultProps = {
  className: '',
  disabled: false,
  hasError: false,
  id: '',
  name: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  icons: PropTypes.object,
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: PropTypes.object,
  mask: PropTypes.func,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
