import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import "./ButtonUI.scss";

interface ButtonProps {
  style?: object;
  variant?: string;
  size?: string;
  children?: React.ReactChild | React.ReactNode;
}

const ButtonUI: FC<PropsWithChildren<ButtonProps>> = ({
  style,
  variant,
  size,
  children,
}: ButtonProps) => {
  const [proportion, setProportion] = useState<string>("");
  const [background, setBackground] = useState<string>("");

  const checkButtonAttributes = () => {
    if (size === "big") {
      setProportion("ui__btn_size-big");
    } else if (size === "medium") {
      setProportion("ui__btn_size-medium");
    } else {
      setProportion("ui__btn_size-default");
    }

    if (variant === "outlined") {
      setBackground("ui__btn_variant-outlined");
    } else {
      setBackground("ui__btn_variant-default");
    }
  };

  useEffect(() => {
    checkButtonAttributes();
  }, []);

  return (
    <button
      style={style}
      className={[proportion, background].join(" ")}
    >
      {children}
    </button>
  );
};

export default ButtonUI;
