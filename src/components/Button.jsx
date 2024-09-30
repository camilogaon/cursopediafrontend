import React from 'react';

const Button = (props) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded ${props.variant === 'outline' ? 'border border-gray-500' : 'bg-gray-900 text-white'}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
