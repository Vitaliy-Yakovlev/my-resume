import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { StyledButton } from './Button.styles';

const Button = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  type = 'button',
  ...props
}) => {
  const isGithub = variant === 'github';

  const content = (
    <>
      {isGithub && <FaGithub size={16} />}
      {children}
    </>
  );

  if (href) {
    return (
      <StyledButton as="a" href={href} target={target} rel={rel} variant={variant} {...props}>
        {content}
      </StyledButton>
    );
  }

  return (
    <StyledButton type={type} variant={variant} onClick={onClick} {...props}>
      {content}
    </StyledButton>
  );
};

export default Button;
