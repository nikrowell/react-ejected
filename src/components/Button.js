import React from 'react';
import { isUndefined } from '../utils';

const Button = ({
  as: Element = 'button',
  className = '',
  children,
  ...props
}) => {

  if (Element === 'button' && isUndefined(props.type)) {
    props.type = 'button';
  }

  return (
    <Element className={['btn', className].join(' ')} {...props}>
      {children}
    </Element>
  );
};

export default Button;