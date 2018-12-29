import React from 'react';

const Button = ({
  as: Element = 'button',
  className = '',
  children,
  ...props
}) => (
  // TODO: add type="button" fallback to props if as === 'button'?
  // TODO: support for primary boolean prop?
  <Element className={['btn', className].join(' ')} {...props}>
    {children}
  </Element>
);

export default Button;