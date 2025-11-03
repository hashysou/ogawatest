import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  isExternal?: boolean;
  gtmId?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', className = '', isExternal = false, gtmId, onClick }) => {
  const baseClasses = 'inline-block text-center font-bold py-3 px-8 rounded-full transition-colors duration-300';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-opacity-80',
    secondary: 'bg-secondary text-white hover:bg-opacity-80',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const commonProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`,
    'data-gtm': gtmId,
    onClick: onClick,
  };

  if (isExternal || href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} {...commonProps}>
        {children}
      </a>
    );
  }
  
  if(href.startsWith('#')) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        if(onClick) onClick();
      };
      return (
        <a href={href} {...commonProps} onClick={handleClick}>
            {children}
        </a>
      )
  }

  return (
    <Link to={href} {...commonProps}>
      {children}
    </Link>
  );
};

export default Button;
