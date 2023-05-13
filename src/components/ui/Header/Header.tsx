import React from 'react'
import "./header.scss"

interface HeaderProps {
  children: React.ReactNode,
  className?: string
}

const Header:React.FC<HeaderProps> = ({children, className = ""}) => {
  return (
    <h1 className={`header ${className}`}>{children}</h1>
  )
}

export default Header