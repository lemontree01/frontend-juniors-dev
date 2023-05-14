import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import "./ChooseButton.scss";

interface ChooseButtonProps {
  children?: React.ReactChild | React.ReactNode;
}

const ChooseButtonUI: FC<PropsWithChildren<ChooseButtonProps>> = ({
  children,
}: ChooseButtonProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  const setStyle = () => {
    if (toggle) {
      setActive("active");
    } else {
      setActive("");
    }
  };

  useEffect(() => {
    setStyle();
  }, [toggle]);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={[active, "ui__btn_variant-outlined-choose"].join(
        " "
      )}
    >
      {children}
    </button>
  );
};

export default ChooseButtonUI;
