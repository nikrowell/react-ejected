import React from 'react';

const Button = ({
  as: Element = 'button',
  className = '',
  children,
  ...props
}) => (
  <Element className={['btn', className].join(' ')} {...props}>
    {children}
  </Element>
);

export default Button;