"use client"

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    )
}

export default Button