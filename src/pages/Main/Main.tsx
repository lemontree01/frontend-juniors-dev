import React from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../App";
import { toggleTheme } from "../../store/features/themeSlice";

const Main = () => {
  const { color } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <div className="main">
      Main <span>{color}</span>{" "}
      <button onClick={() => dispatch(toggleTheme())}>switch</button>
    </div>
  );
};

export default Main;
