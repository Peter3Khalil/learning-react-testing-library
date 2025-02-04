import React, { FC } from 'react';

const Button: FC<React.ComponentProps<'button'>> = (props) => {
  return <button {...props} />;
};

export default Button;
