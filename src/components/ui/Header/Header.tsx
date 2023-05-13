import React from "react";
import "./header.scss";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  const { className, ...propsWithoutClassname } = props;
  return (
    <h1 {...propsWithoutClassname} className={`header ${className}`}>
      {children}
    </h1>
  );
};

export default Header;
